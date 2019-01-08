module.exports = {
  entry: './src/Index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },

  node: {
    fs: 'empty'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
};
