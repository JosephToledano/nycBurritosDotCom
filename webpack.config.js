const path = require("path");

module.exports = {
  entry: "./client/Index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    // changed from extensions: [".js", ".jsx"]
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  mode: process.env.NODE_ENV,
  //process.env.NODE_ENV,
  devServer: {
    publicPath: "/build/",
    historyApiFallback: true,
    proxy: {
      "/google": "http://localhost:3001/",
      "/api": "http://localhost:3001/",
      "/login": "http://localhost:3001/",
      "/signup": "http://localhost:3001/",
    },
  },
  module: {
    rules: [
      {
        rules: [
          // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
          {
            test: /\.(t|j)sx?$/,
            use: { loader: "ts-loader" },
            exclude: /node_modules/,
          },

          // addition - add source-map support
          {
            enforce: "pre",
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "source-map-loader",
          },
        ],
      },
      {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
      {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
        ],
      },
    ],
  },
  // externals: {
  //   'react': "React",
  //   "react-dom": "ReactDOM",
  // },
  // addition - add source-map support
  devtool: "source-map",
};

//script:
//"dev": "(node server/server.js) & NODE_ENV=development webpack-dev-server --open",
