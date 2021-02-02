const path = require("path");

module.exports = {
  entry: "./client/Index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV,
  //process.env.NODE_ENV,
  devServer: {
    publicPath: "/build/",
    proxy: {
      "/api": "http://localhost:3001/",
    },
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
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
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: "file-loader",
              },
            ],
          },
        ],
      },
    ],
  },
  //   plugins: [

  //     new HtmlWebpackPlugin({
  //         template: 'src/index.html'
  //     })
  // ]
};

//script:
//"dev": "(node server/server.js) & NODE_ENV=development webpack-dev-server --open",
