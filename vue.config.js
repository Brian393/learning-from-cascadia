const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      fallback: {
        net: require.resolve("net-browserify"),
        tls: false,
      },
    },
    plugins: [new NodePolyfillPlugin()],
  },
});
