export default `# Extended Syntax - Directive

> Powered by [micromark-extension-directive]

A lovely language know as :abbr[HTML]{title="HyperText Markup Language"}.

:::main{#readme}
Lorem:br
ipsum.

::hr{.red}
::hr{.blue data-type=blue}

A :i[lovely] language know as :abbr[HTML]{title="HyperText Markup Language"}.
:::

More about directive syntax here: <https://github.com/micromark/micromark-extension-directive#syntax>.

You need to manually set \`plugins.directive\`, like this:

\`\`\`typescript
import Markdown, {
  MarkdownDirective
  MarkdownExtensionDirectiveHtmlOptions,
} from '@alicloud/rc-markdown';

const directiveOptions: MarkdownExtensionDirectiveHtmlOptions = {
  abbr(d: MarkdownDirective) {
    if (d.type !== 'textDirective') {
      return false;
    }
    
    this.tag('<abbr');
    
    if (d.attributes && 'title' in d.attributes) {
      this.tag(' title="' + this.encode(d.attributes.title) + '"');
    }
    
    this.tag('>');
    this.raw(d.label || '');
    this.tag('</abbr>');
  }
};

<Markdown {...{
  ...
  plugins: {
    directive: directiveOptions
  }
}} />;
\`\`\``;