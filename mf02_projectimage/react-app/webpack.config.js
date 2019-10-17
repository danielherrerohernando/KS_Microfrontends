const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = env => {
    const config = {
        entry: {
            app: [
                '@babel/polyfill',
                path.resolve(__dirname, 'src', env.TARGET === 'export' ? 'microIndex.js' : 'index.js'),
            ],
        },
        externals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        },
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
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'eslint-loader'],
                },
                {
                    test: /\.css$/i,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader', // creates style nodes from JS strings
                        'css-loader', // translates CSS into CommonJS
                    ],
                },
                {
                    test: /\.(png|jp(e*)g|svg)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 1000000, // Convert images < 8kb to base64 strings
                                name: 'images/[hash]-[name].[ext]',
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [new Dotenv()],
    }
    return config
}
