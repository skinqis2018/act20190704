const autoprefixer = require('autoprefixer')
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('file-loader')
      .tap(options => {
        options.name = 'images/[name].[hash:8].[ext]'
        return options
      })

  },
  css: {
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
        // options: {
        plugins: [autoprefixer()]
        // }
      },
      less: {
      }
    }
  }
}
