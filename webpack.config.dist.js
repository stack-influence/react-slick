var webpack = require('webpack');
var path = require('path');

module.exports = {
  mode: 'production',

  entry: './src/index',

  output: {
    library: 'Slider',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    'framer-motion': {
      root: 'FramerMotion',
      commonjs2: 'framer-motion',
      commonjs: 'framer-motion',
      amd: 'framer-motion',
    },
  },

  node: {
    Buffer: false,
  },

  devtool: 'source-map',

  performance: {
    hints: 'warning',
  },

  plugins: [],
};
