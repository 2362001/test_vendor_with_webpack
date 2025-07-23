const { merge } = require("webpack-merge");

module.exports = (config) => {
  return merge(config, {
    optimization: {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor-js",
            chunks: "all",
            enforce: true,
            // priority: 10,
          },
        },
      },
    },
  });
};
