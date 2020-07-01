const { ConcatSource } = require('webpack-sources')

class WidgetBuildWebpackPlugin {
  constructor(opts = {}) {
    this.env = opts.env
    this.globalIdentifier = opts.globalIdentifier || 'widgetJsonp'
  }

  apply(compiler) {
    compiler.hooks.compilation.tap(
      'WidgetBuildWebpackPlugin',
      (compilation) => {
        compilation.hooks.optimizeChunkAssets.tap(
          'WidgetBuildWebpackPlugin',
          (chunks) => {
            for (const chunk of chunks) {
              if (!chunk.canBeInitial()) {
                // eslint-disable-next-line no-continue
                continue
              }

              for (const file of chunk.files) {
                const targetFile =
                  file === compilation.outputOptions.filename ||
                  compilation.outputOptions.filename.replace(
                    /\[[^\]]*\]/,
                    chunk.name
                  )

                if (targetFile) {
                  compilation.updateAsset(
                    file,
                    (old) =>
                      new ConcatSource(
                        `(window["${this.globalIdentifier}"] = window["${
                          this.globalIdentifier
                        }"] || []).push([${JSON.stringify(
                          this.env.id
                        )}, ${JSON.stringify(
                          this.env.version
                        )}, function widgetFactory(module, exports, require, window, document, location, history) {`,
                        old,
                        '}])'
                      )
                  )
                }
              }
            }
          }
        )
      }
    )
  }
}

module.exports = WidgetBuildWebpackPlugin
