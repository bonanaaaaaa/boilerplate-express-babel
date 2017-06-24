import path from 'path'
import nodeExternals from 'webpack-node-externals'

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
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js']
  }
}

const devConfig = {
  ...baseConfig,
  name: 'dev',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map'
}

const prodConfig = {
  ...baseConfig,
  name: 'prod',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build')
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports = prodConfig
} else {
  module.exports = devConfig
}
