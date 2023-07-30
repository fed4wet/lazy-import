const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  mode: "production",
  plugins: [
    new CompressionPlugin({
      // Be very carefully with true, sometimes bug happens
      deleteOriginalAssets: false,
      algorithm: 'gzip',
      test: /\.(js|css|html)$/,
    }),
  ]
};
