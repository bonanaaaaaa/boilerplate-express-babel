const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const baseConfig = {
  target: 'node',
  node: {
    __filename: false,
    __dirname: false
  },
  externals: [nodeExternals()],
  entry: './src/app.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          path.resolve(__dirname, 'test')
        ]
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js']
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/index.html' }
    ])
  ]
}

const devConfig = Object.assign({}, baseConfig, {
  name: 'dev',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map'
})

const prodConfig = Object.assign({}, baseConfig, {
  name: 'prod',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build')
  }
})

if (process.env.NODE_ENV === 'production') {
  module.exports = prodConfig
} else {
  module.exports = devConfig
}
