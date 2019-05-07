let globalConfig = require("./src/config/config");

const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];

module.exports = {
  publicPath: "./",
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.30.137:18080",
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },

  chainWebpack: config => {
    config.plugin("define").tap(args => {
      args[0]["process.globalConfig"] = JSON.stringify(
        globalConfig[process.env.NODE_ENV]
      );
      return args;
    });
    if (
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "test"
    ) {
      // 图片处理
      config.module
        .rule("images")
        .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        .use("url-loader")
        .loader("url-loader")
        .options({
          limit: 10000,
          name: "img/[name].[hash:7].[ext]"
        })
        .end()
        .use("image-webpack-loader")
        .loader("image-webpack-loader");
    }
  },

  configureWebpack: config => {
    if (
      process.env.NODE_ENV === "production" ||
      process.env.NODE_ENV === "test"
    ) {
      // 开启gzip
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          threshold: 10240,
          minRatio: 0.8
        })
      );

      //打包输出配置
      config.output.filename = "js/[name].[hash:8].js";
      config.output.chunkFilename = "js/[name].[hash:8].js";
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: []
      }
    }
  },

  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: false
    }
  }
};
