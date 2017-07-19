module.exports = {
  entry: "./frontend/index.jsx",
  output: {
    filename: "frontend/bundle.js",
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  },
  resolve: { extensions: [".jsx", ".js", ".json"] }
}
