const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/components/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: 'asset/inline',
        },
        {
          test: /\.scss$/,
          use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader', 'sass-loader'],
        },
    ],
  },
  mode: "development",
  plugins: [new MiniCssExtractPlugin()],
};