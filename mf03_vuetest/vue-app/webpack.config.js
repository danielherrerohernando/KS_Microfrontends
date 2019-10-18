const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = env => {
	const config = {
		entry: [env.TARGET === 'export' ? './src/microIndex.js' : './src/App.js'],
		output: {
			path: path.join(__dirname, '.', env.TARGET === 'export' ? 'microBundle' : 'public/js'),
			filename: env.TARGET === 'export' ? 'microApp.js' : 'app.js',
			publicPath: '/public/js/',
		},
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			compress: true,
			host: '0.0.0.0',
			port: 3000,
		},
		module: {
			rules: [
				{
					test: /\.vue$/,
					use: 'vue-loader',
				},
			],
		},
		plugins: [new VueLoaderPlugin()],
	};
	return config;
};
