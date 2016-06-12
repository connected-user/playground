module.exports = {
  entry: './main.js',
  output: {
    path: './dist',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,loader: 'babel',
        exclude: /node_modules/,
        query: { presets: ['es2015', 'react'] }
      },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=1000000' },
      { test: /\.(svg|ttf|woff|eot)/, loader: 'file-loader' }
    ]
  }
};