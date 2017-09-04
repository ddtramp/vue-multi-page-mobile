let path = require('path')
let utils = require('./utils')
let webpack = require('webpack')
let config = require('../config')
let merge = require('webpack-merge')
let baseWebpackConfig = require('./webpack.base.conf')
let CopyWebpackPlugin = require('copy-webpack-plugin')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')
let OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
let glob = require("glob")

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

let env = process.env.NODE_ENV === 'testing'
    ? require('../config/test.env')
    : config.build.env

let webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },
    plugins: [
        // clean dist folder
        new CleanWebpackPlugin(['dist'], {
            "root": resolve(''),
            "verbose": true
        }),
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': env,
            envConfig: env

        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        // extract css into its own file
        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].[contenthash].css')
        }),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        // generate dist index.html with correct asset hash for caching.
        // you can customize output by editing /index.html
        // see https://github.com/ampedandwired/html-webpack-plugin
        // new HtmlWebpackPlugin({
        //   filename: process.env.NODE_ENV === 'testing'
        //     ? 'index.html'
        //     : config.build.index,
        //   template: 'index.html',
        //   inject: true,
        //   minify: {
        //     removeComments: true,
        //     collapseWhitespace: true,
        //     removeAttributeQuotes: true
        //     // more options:
        //     // https://github.com/kangax/html-minifier#options-quick-reference
        //   },
        //   // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        //   chunksSortMode: 'dependency'
        // }),
        // keep module.id stable when vender modules does not change
        new webpack.HashedModuleIdsPlugin(),
        // split vendor js into its own file
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: config.build.assetsSubDirectory,
                ignore: ['.*']
            }
        ])
    ]
})

if (config.build.productionGzip) {
    let CompressionWebpackPlugin = require('compression-webpack-plugin')

    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                config.build.productionGzipExtensions.join('|') +
                ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    )
}

if (config.build.bundleAnalyzerReport) {
    let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}


/**
 **  multi-pages config
 */

function getEntry(globPath) {
    let entries = {},
        basename, tmp, pathname;
    if (typeof (globPath) != "object") {
        globPath = [globPath]
    }
    globPath.forEach((itemPath) => {
        glob.sync(itemPath).forEach(function (entry) {
            basename = path.basename(entry, path.extname(entry));
            if (entry.split('/').length > 4) {
                tmp = entry.split('/').splice(-3);
                pathname = tmp[0] + '/' + tmp[1] // 正确输出js和html的路径
                entries[pathname] = entry;
            } else {
                entries[basename] = entry;
            }
        });
    });
    return entries;
}

let pages = getEntry(['./src/pages/*_prod.html', './src/pages/*/*_prod.html']);
for (let pathname in pages) {
    // 配置生成的html文件，定义路径等
    let conf = {
        filename: pathname + '.html',
        template: pages[pathname],   // 模板路径
        inject: true,              // js插入位置
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
    };

    if (pathname in webpackConfig.entry) {
        conf.chunks = ['manifest', 'vendor', pathname];
        conf.hash = true;
    }

    webpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
}

module.exports = webpackConfig
