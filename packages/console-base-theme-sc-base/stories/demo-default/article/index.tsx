import React from 'react';

import {
  ArticleBase
} from '../../../src';

const CODE_SNIPPET = `const myButtonsClassName = cssInJsLibraryFunctionHere({
  color: "red",
  "text-align": "center"
});

// Or with tagged template literals

const myButtonsClassName = css\`
  color: red;
  text-align: center;
\`;`;

const CODE_SNIPPET2 = `import styled from "styled-components";

const Button = styled.button\`
  color: \${({dark}) => dark ? "dark" : "white"}
\`;

<Button />
<Button dark />`;

export default function DemoDefault(): JSX.Element {
  return <ArticleBase>
    <h1>What is CSS-in-JS?</h1>
    <a href="https://h.shadowtime2000.com/what-is-css-in-js" target="_blank">The original article</a>
    <blockquote>So you have all probably heard of CSS-in-JS frameworks and libraries such as <code>emotion</code>, <code>styled-components</code>, and <code>goober</code>.</blockquote>
    <h2>What is CSS-in-JS</h2>
    <p>CSS-in-JS libraries follow many different patterns. But usually, they end up allowing you to do one thing:</p>
    <ol>
      <li>Allow you to create unique CSS classes from JavaScript</li>
    </ol>
    <p>Basically, you would typically use it like this:</p>
    <pre>{CODE_SNIPPET}</pre>
    <p>Some libraries (like <a href="https://styled-components.com" target="_blank">styled-components</a>) let you create React components from those styles, and allow you to create dynamic values for styling.</p>
    <pre>{CODE_SNIPPET2}</pre>
    <h2>Conclusion</h2>
    <p>CSS-in-JS is a pattern that allows you to write CSS styles inside your JavaScript.</p>
  </ArticleBase>;
}

