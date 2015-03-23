module.exports = (function() {

	var config = {
		prod: {
			$Debug: false,
			$Env: 'prod',
			$Language:{
				'http://example.com': 'en'
			},
			$Server: {
				port: 3001,
				apiUrl: '/api',
				staticFolder: '/static'
			},
			$Api: {
				server: 'http://localhost:4001/api/v1'
			}
		},
		dev: {
			$Debug: true,
			$Env: 'dev',
			$Language:{
				'http://localhost:3001': 'en'
			},
			$Server: {
				port: 3001,
				apiUrl: '/api',
				staticFolder: '/static'
			},
			$Api: {
				server: 'http://localhost:4001/api/v1'
			}
		},
		test: {
			$Debug: true,
			$Env: 'test',
			$Language:{
				'http://localhost:3001': 'en'
			},
			$Server: {
				port: 3001,
				apiUrl: '/api',
				staticFolder: '/static'
			},
			$Api: {
				server: 'http://localhost:4001/api/v1'
			}
		}
	};

	var environment = process.env.NODE_ENV || 'dev';

	if (environment === 'development') {
		environment = 'dev';
	}

	return config[environment];
})();
