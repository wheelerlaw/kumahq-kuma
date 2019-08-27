package bootstrap

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/Kong/konvoy/components/konvoy-control-plane/pkg/core"
	"github.com/Kong/konvoy/components/konvoy-control-plane/pkg/core/resources/store"
	core_runtime "github.com/Kong/konvoy/components/konvoy-control-plane/pkg/core/runtime"
	"github.com/Kong/konvoy/components/konvoy-control-plane/pkg/util/proto"
	"io/ioutil"
	"net/http"
)

var log = core.Log.WithName("xds-server").WithName("bootstrap")

type BootstrapServer struct {
	Port      int
	Generator BootstrapGenerator
}

var _ core_runtime.Component = &BootstrapServer{}

func (b *BootstrapServer) Start(stop <-chan struct{}) error {
	mux := http.NewServeMux()
	mux.HandleFunc("/bootstrap", b.handleBootstrapRequest)

	bootstrapServer := &http.Server{
		Addr:    fmt.Sprintf(":%d", b.Port),
		Handler: mux,
	}

	errChan := make(chan error)

	go func() {
		defer close(errChan)
		if err := bootstrapServer.ListenAndServe(); err != nil {
			if err != http.ErrServerClosed {
				log.Error(err, "terminated with an error")
				errChan <- err
				return
			}
		}
		log.Info("terminated normally")
	}()
	log.Info("starting", "port", b.Port)

	select {
	case <-stop:
		log.Info("stopping")
		return bootstrapServer.Shutdown(context.Background())
	case err := <-errChan:
		return err
	}
}

func (b *BootstrapServer) handleBootstrapRequest(resp http.ResponseWriter, req *http.Request) {
	bytes, err := ioutil.ReadAll(req.Body)
	if err != nil {
		log.Error(err, "Could not read a request")
		resp.WriteHeader(http.StatusInternalServerError)
		return
	}
	reqParams := BootstrapRequest{}
	if err := json.Unmarshal(bytes, &reqParams); err != nil {
		log.Error(err, "Could not parse a request")
		resp.WriteHeader(http.StatusBadRequest)
		return
	}

	config, err := b.Generator.Generate(req.Context(), reqParams)
	if err != nil {
		if store.IsResourceNotFound(err) {
			resp.WriteHeader(http.StatusNotFound)
			return
		}
		log.WithValues("params", reqParams).Error(err, "Could not generate a bootstrap configuration")
		resp.WriteHeader(http.StatusInternalServerError)
		return
	}

	bytes, err = proto.ToYAML(config)
	if err != nil {
		log.WithValues("params", reqParams).Error(err, "Could not convert to json")
		resp.WriteHeader(http.StatusInternalServerError)
		return
	}

	resp.WriteHeader(http.StatusOK)
	resp.Header().Set("content-type", "text/x-yaml")
	_, err = resp.Write(bytes)
	if err != nil {
		log.WithValues("params", reqParams).Error(err, "Error while writing the response")
		return
	}
}
