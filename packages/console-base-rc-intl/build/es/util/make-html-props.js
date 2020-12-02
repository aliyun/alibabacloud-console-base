/**
 * 为 HTML 创建 props
 */
export default function makeHtmlProps(html) {
  return {
    dangerouslySetInnerHTML: {
      __html: html
    }
  };
}