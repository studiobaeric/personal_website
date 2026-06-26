const path = require('path');

module.exports = {
  entry: {
    app: './js/trail.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/trail.js',
  },
};
