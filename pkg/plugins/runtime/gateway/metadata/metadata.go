package metadata

import core_plugins "github.com/kumahq/kuma/pkg/core/plugins"

// OriginGateway marks xDS resources generated by this plugin.
const (
	OriginGateway                               = "gateway"
	PluginName          core_plugins.PluginName = "gateway"
	ProfileGatewayProxy                         = "gateway-proxy"
)