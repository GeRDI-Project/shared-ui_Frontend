const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname,"./src/index.js"),
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: "shared-ui-module.min.js"
    },
    module: {
        rules: [
              {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
                }
              },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                    }
                },
                cssSourceMap: true,
                transformToRequire: {
                    video: ["src", "poster"],
                    source: "src",
                    img: "src",
                    image: "xlink:href"
                }
            }
        },
        {
            test: /\.js$/,
            loader: "babel-loader"
        }
    ]
  }
};
