const e="DataplaneOverview",s="default",n="cluster-1.ingress-02",a="2021-02-19T06:38:49.548705Z",o="2021-02-19T07:39:23.218956+01:00",t={networking:{address:"127.0.0.1",inbound:[{port:2e4,tags:{"kuma.io/service":"ingress","kuma.io/zone":"cluster-1"}}]}},c={subscriptions:[{id:"6faec878-cf27-42c4-804a-3c50b4021665",controlPlaneInstanceId:"foobar",connectTime:"2021-02-19T06:38:50.697460Z",status:{lastUpdateTime:"2021-02-19T06:39:22.733623Z",total:{responsesSent:"6",responsesAcknowledged:"6"},cds:{responsesSent:"2",responsesAcknowledged:"2"},eds:{responsesSent:"2",responsesAcknowledged:"2"},lds:{responsesSent:"2",responsesAcknowledged:"2"},rds:{}},version:{kumaDp:{version:"1.0.0-rc2-211-g823fe8ce",gitTag:"1.0.0-rc2-211-g823fe8ce",gitCommit:"823fe8cef6430a8f75e72a7224eb5a8ab571ec42",buildDate:"2021-02-18T13:28:29Z"},envoy:{version:"1.16.2",build:"e98e41a8e168af7acae8079fc0cd68155f699aa3/1.16.2/Modified/DEBUG/BoringSSL"},dependencies:{coredns:"1.8.3"}}}]},i={type:e,mesh:s,name:n,creationTime:a,modificationTime:o,dataplane:t,dataplaneInsight:c};export{a as creationTime,t as dataplane,c as dataplaneInsight,i as default,s as mesh,o as modificationTime,n as name,e as type};