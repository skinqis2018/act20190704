const autoprefixer = require('autoprefixer')
module.exports = {
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
