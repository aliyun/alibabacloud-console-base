interface IHtmlProps {
  dangerouslySetInnerHTML: {
    __html: string;
  };
}

/**
 * 为 HTML 创建 props
 */
export default function makeHtmlProps(html: string): IHtmlProps {
  return {
    dangerouslySetInnerHTML: {
      __html: html
    }
  };
}
