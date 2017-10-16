var httpProxy = require('http-proxy');

httpProxy.createProxyServer({target: 'http://39.108.234.236'}).listen(80);
