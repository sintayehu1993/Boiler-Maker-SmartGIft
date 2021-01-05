

module.exports = {
    entry: ['./client/main.js', //  your entry point is the main.js in the root of your project folder
    '@babel/polyfill', // enables async-await
],
    mode: 'development',
    output: {
      path: __dirname, // assumes your bundle.js will also be in the root of your project folder
      filename: 'bundle.js'
    },
    devtool: 'source-maps',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  }
