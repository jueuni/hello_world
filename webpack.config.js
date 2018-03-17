module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public/'
    },

    module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use:{
                      loader: 'babel-loader',
                      options: {
                          cacheDirectory: true,
                          presets: ['es2015', 'react']
                      }
                    }

                }
            ]
        }
};
