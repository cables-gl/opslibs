const path = require('path');

module.exports = [
  {
    entry: './index.js',
    mode: 'production',
    devtool: 'source-map',
  
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'rapierpkg.min.js',
  
      library: {
        name: 'rapierpkg',
        type: 'umd',
      },
    },
  },{
    entry: './index.js',
    mode: 'development',
  
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'rapierpkg.js',
  
      library: {
        name: 'rapierpkg',
        type: 'umd',
      },
    },
  }]


