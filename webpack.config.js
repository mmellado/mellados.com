var webpack = require('webpack');

if (process.env.NODE_ENV === 'development') {
  var loaders = ['react-hot','babel']
} else {
  var loaders = ['babel'];
}

module.exports = {
  devtool: 'eval',
  entry: './app-client.js',
  plugins: [new webpack.EnvironmentPlugin(['SPACE', 'ACCESS_TOKEN'])],
  output: {
    path: __dirname + '/public/dist',
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: loaders,
      exclude: /node_modules/
    }]
  }
};
