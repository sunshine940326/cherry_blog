const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, './src/styles/index.sass')]
    }
  },
  chainWebpack: (config) => {
    // config.module
    //   .rule('md')
    //   .test(/\.md$/)
    //   .use('vue-loader')
    //   .loader('vue-loader')
    //   .end()
    //   .use('vue-markdown-loader')
    //   .loader('vue-markdown-loader/lib/markdown-compiler')
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
  }
}
