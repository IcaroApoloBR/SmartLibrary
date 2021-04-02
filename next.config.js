const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack: config => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|jpeg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          fallback: 'file-loader',
          publicPath: '/_next/',
          outputPath: '/static/',
          name: '[name]-[hash].[ext]'
        }
      }
    })
    return config
  }
})
