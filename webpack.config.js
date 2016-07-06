if (process.env.NODE_ENV === 'development') {
  var webpack = require('webpack');
  var loaders = ['react-hot','babel'];
  var plugins = [new webpack.EnvironmentPlugin(['NODE_ENV', 'SPACE', 'ACCESS_TOKEN'])];
} else {
  var loaders = ['babel'];
  var plugins = [];
}

module.exports = {
  devtool: 'eval',
  entry: './app-client.js',
  plugins: plugins,
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
