import compose from './compose'
import addNameSpaceToCssRules from './addNameSpaceToCssRules'
import stripOutCssComment from './stripOutCssComment'

export default function injectStyle(styleNode, opts) {
  // it's a good convention to always use the explicit alias to access top
  // browsing context globals, it helps to avoid ambiguity with
  // the nesting browsing context globals
  const hostDocument = document

  const composedTransformer = compose(
    ...[
      ...(opts.transformer &&
        opts.transformer
          .filter((item) => item.type === 'css')
          .map((item) => item.use)),
      (arg) => addNameSpaceToCssRules(arg, opts.rootClassName),
      stripOutCssComment,
    ]
  )
  // delay to the next event loop
  setTimeout(() => {
    let style = styleNode
    if (style.textContent !== undefined) {
      // style element
      const { textContent: css } = style
      style.textContent = composedTransformer(css)
    } else {
      // css text
      style = hostDocument.createElement('style')
      style.textContent = composedTransformer(styleNode)
    }

    style.setAttribute('data-widget', opts.rootClassName || 'widget-loader')

    hostDocument.head.appendChild(style)
  }, 0)
}
