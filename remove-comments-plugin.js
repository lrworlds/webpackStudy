class RemoveCommentsPlugin {
  apply(compiler) {
    // compiler  Webpack 工作过程中最核心的对象，里面包含了我们此次构建的所有配置信息
    // console.log('removeCommentPlugin')
    compiler.hooks.emit.tap('RemoveCommentsPlugin', (compilation) => {
      //compilation 此次打包的上下文
      for (const name in compilation.assets) {
        if (name.endsWith('.js')) {
          const contents = compilation.assets[name].source()
          const noComments = contents.replace(/\/\*{2,}\/\s?/g, '')
          compilation.assets[name] = {
            source: () => noComments,
            size: () => noComments.length
          }
        }
      }
    })
  }
}
module.exports = RemoveCommentsPlugin
