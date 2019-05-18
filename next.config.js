const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  //   // cssModules: true,
  // cssLoaderOptions: {
  //   // importLoaders: 1,
  //   // localIdentName: "[local]___[hash:base64:5]",
  //   url: false
  // }
  webpack: config => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]"
        }
      }
    });
    return config;
  }
});
