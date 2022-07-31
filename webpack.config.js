module.exports = {
  // entry: './index.js',
  // entry: './index.react.js',
  // entry: './index.jsx',
  entry: './index.tsx',
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        // test: /\.js$/,
        // test: /\.jsx$/,
        test: /\.tsx$/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        // test: /\.js$/,
        // test: /\.jsx$/,
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
