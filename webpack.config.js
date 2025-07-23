const { merge } = require("webpack-merge");

module.exports = (config) => {
  return merge(config, {
    optimization: {
      splitChunks: {
        chunks: "all",
        maxSize: 50 * 1024,
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
