/* eslint-disable max-len */
import React from 'react';

import {
  ArticleBase
} from '../../../src';

const CODE_SNIPPET = `function Button(props): JSX.Element {
  return &lt;button className={'large' in props && 'large'}&gt;
{props.children}
  &lt;style jsx&gt;{\`
    button {
      padding: 20px;
      background: #eee;
      color: #999
    }
    
    .large {
      padding: 50px
    }
  \`}&lt;/style&gt;
  &lt;/button&gt;
}

  /* Creates a regular button */
  &lt;Button&gt; Hi &lt;/Button&gt;;
/* Creates a large button */
  &lt;Button large&gt;Big&lt;/Button&gt;`;

const CODE_SNIPPET2 = `/* Registers a Web Component with red background */
import {
  StyleSheet,
  css
} from 'aphrodite';

const styles = StyleSheet.create({
  red: {
  backgroundColor: 'red'
}
});

class App extends HTMLElement {
  attachedCallback() {
  this.innerHTML = \`
&lt;div class="\${css(styles.red)}"&gt;This is red.&lt;/div&gt;
\`;
}
}

  document.registerElement('my-app', App);`;

export default function DemoDefault(): JSX.Element {
  return <ArticleBase>
    <h1>What is CSS-in-JS?</h1>
    <p>CSS-in-JS libraries provide us with a new approach for writing CSS. They aim to tackle the limitations of CSS, such as the lack of dynamic functionality, scoping, and portability. In spite of its advantages, CSS-in-JS is a controversial technology, as many developers ask if it&apos;s worth further complicating front-end development.</p>
    <p>This article intends to give you a high-level overview of CSS-in-JS libraries. We&apos;ll look into how these libraries work, which problems they solve, and how to decide if you should use them.</p>
    <section>
      <h2>What Is CSS-in-JS?</h2>
      <p>CSS-in-JS libraries have been gaining traction since component-based JavaScript frameworks appeared in front-end development. Angular, React, Vue, and other frameworks are all based on modules called <strong>components</strong> from which you can build up an entire single-page application (SPA). A component is usually a UI element such as a button, pop-up, or navigation bar. You only need to create a component once and you can reuse it in any context within the application.</p>
      <p>But, how should you style SPA components efficiently? If you use global CSS files then it will be hard to tell what the end result will look like. Due to the cascading nature of CSS (<em>Cascading</em> Style Sheets), stylesheets can load in any order and override each other in any combination. Managing dependencies is another problem when it comes to styling SPAs. If dependency management is difficult when working with regular websites, it&apos;ll be almost impossible with a modular web app above a certain complexity.</p>
      <p>A well-designed CSS-in-JS library can solve all of these problems. CSS-in-JS is, in fact, a JavaScript library that bundles each JavaScript component with all its belonging CSS rules and dependencies. As a result, components can run independently, without relying on any external CSS file. This is how Max Stoiber, the co-creator of the <a href="https://github.com/styled-components/styled-components" rel="external" target="_blank">Styled Components</a> library explains in his excellent<a href="https://mxstbr.com/thoughts/css-in-js/" rel="external" target="_blank">blog post</a> how CSS-in-JS libraries work:</p>
      <blockquote>For three years, I have styled my web apps without any .css files. Instead, I have written all the CSS in JavaScript. ... I can add, change and delete CSS without any unexpected consequences. My changes to the styling of a component will not affect anything else. If I delete a component, I delete its CSS too. No more append-only stylesheets! –<a href="https://mxstbr.com/thoughts/css-in-js/" target="_self">Max Stoiber</a></blockquote>
      <p>I think this statement summarizes the technique pretty well. With CSS-in-JS libraries, you write all your CSS within<code>.js</code> files so that they can work as JavaScript modules.</p>
    </section>
    <h2>Examples of CSS-in-JS Libraries</h2>
    <p>Although every CSS-in-JS library serves the same purpose (i.e. bundling components with CSS), each comes with slightly different features and syntax. Let&apos;s see how the most popular CSS-in-JS libraries stack up to each other.</p>
    <h3>Framework-Specific vs. Framework-Agnostic</h3>
    <p>Some libraries only work with a specific JavaScript framework. For example, <a href="https://github.com/FormidableLabs/radium" rel="external" target="_blank">Radium</a> has been created for React apps, while <a href="https://github.com/zeit/styled-jsx" rel="external" target="_blank">Styled JSX</a> only supports components written in<a href="https://facebook.github.io/jsx/" rel="external" target="_blank">JSX</a> (that you can use both with and without React).</p>
    <p>Framework-specific CSS-in-JS libraries use the same syntax as the framework they support. For instance, Styled JSX uses template literals within the JSX syntax to add CSS styles to components. The following code (from <a href="https://github.com/zeit/styled-jsx#via-classname-toggling" rel="external" target="_blank">Styled JSX&apos;s GitHub docs</a>) creates two types of buttons, a regular and a large one:</p>
    <pre>{CODE_SNIPPET}</pre>
    <p>Other CSS-in-JS libraries such as <a href="https://cssinjs.org/?v=v10.0.0-alpha.24" rel="external" target="_blank">JSS</a>, <a href="https://github.com/emotion-js/emotion" rel="external" target="_blank">Emotion</a>, and the aforementioned <a href="https://github.com/styled-components/styled-components" rel="external" target="_blank">Styled Components</a> are framework-agnostic. So, you can use them together with any component-based frameworks, plain JavaScript, and some of them such as<a href="https://github.com/Khan/aphrodite" rel="external" target="_blank">Aphrodite</a> work with<a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" rel="external" target="_blank">Web Components</a> as well.</p>
    <p>To see how framework-agnostic CSS-in-JS libraries look in real life, you can try JSS <a href="https://cssinjs.org/?v=v10.0.0-alpha.24#online-playgrounds" rel="external" target="_blank">online playgrounds</a> or check out the following Web Component example from <a href="https://github.com/Khan/aphrodite" rel="external" target="_blank">Aphrodite&apos;s GitHub docs</a>:</p>
    <pre>{CODE_SNIPPET2}</pre>
    <h3>Unique Selectors vs. Inline Styles</h3>
    <p>To handle scoping, most CSS-in-JS libraries such as JSS, Emotion, and Styled Components automatically generate a unique selector for each component. To see it for yourself, you can go to Styled Component&apos;s <a href="https://www.styled-components.com/" rel="external" target="_blank">homepage</a> and inspect one of the examples with your browser&apos;s developer tools. For example, I&apos;ve inspected the pink-ish <code>I&apos;m a styled &lt;Button /&gt;</code> ghost button with Firefox DevTools:</p>
    <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=1700/uploads/users/1999/posts/33574/image/styled-components-unique-selector.jpg" alt="" />
    <p>As you can see, Styled Components has generated two unique classes, one called<code>components__SecondButton-sc-1gmolv7-3 fWxBIM</code> for the button and another one called<code>components__AlignCenter-sc-1gmolv7-0 hjdyfl</code> for the parent div.</p>
    <p>Although this is a great way to create absolutely unique selectors that won&apos;t cause any CSS specificity problems, the source code doesn&apos;t look very pretty. Alternatively, some CSS-in-JS libraries such as Radium add inline CSS on the fly to the HTML instead of generating unique classes.</p>
    <p>The latter approach doesn&apos;t only lead to more readable HTML code but has other advantages as well, such as better performance, source order independence, and dead code elimination. However, using inline styles has some shortcomings, too. According to <a href="https://github.com/FormidableLabs/radium#overview" rel="external" target="_blank">Radium&apos;s documentation</a>:</p>
    <blockquote>Despite that, there are some common CSS features and techniques that inline styles don&apos;t easily accommodate: media queries, browser states (:hover, :focus, :active) and modifiers (no more .btn-primary!). Radium offers a standard interface and abstractions for dealing with these problems.</blockquote>
    <p>So, that&apos;s the trade-off. Based on your needs, you can decide which is the better approach for you.</p>
    <h3>Unique Features</h3>
    <p>CSS-in-JS libraries don&apos;t only differ in syntax, framework support, and scope handling, but each has unique capabilities that are not necessarily included in other libraries, such as:</p>
    <ul>
      <li>global selectors,</li>
      <li>state-based styling,</li>
      <li>client vs. server-side rendering (or both),</li>
      <li>caching,</li>
      <li>source maps,</li>
      <li>built-in auto-prefixing,</li>
      <li>media queries,</li>
      <li>selector nesting</li>
      <li>built-in support for animations,</li>
      <li>additional plugins and packages,</li>
      <li>and others.</li>
    </ul>
    <p>Although most libraries come with good documentation, <a href="https://github.com/michelebertoli/css-in-js#features" rel="external" target="_blank">here&apos;s a comparison table</a> by Michele Bertoli that includes the most important features of multiple CSS-in-JS libraries.</p>
    <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=1700/uploads/users/30/posts/33574/image/table.png" alt="" />
    <h2>Advantages of CSS-in-JS</h2>
    <p>Now, let&apos;s talk about the advantages of CSS-in-JS libraries (even though I&apos;ve already mentioned some of them).</p>
    <h3>Local Scoping</h3>
    <p>By default, CSS doesn&apos;t allow local scoping. Each style rule has a global scope, so it applies to the entire project. As a result, styles can override each other in surprising ways. Front-end developers have created multiple methodologies that add modularity to CSS, such as BEM, OOCSS, and SMACSS. Pre-processors and PostCSS are another way to modularize CSS. CSS-in-JS libraries take this concept to the next level by automating scoping, which leads to a high level of predictability.</p>
    <h3>Encapsulation</h3>
    <p>Encapsulated components hide the details of implementation. They only expose an API to the outside world so that other components can interact with them. Encapsulation facilitates maintenance and eliminates errors, as you can modify all component-related code in the same place, without having to worry about unexpectedly changing other parts of the application.</p>
    <h3>Portability</h3>
    <p>As components include all the source code, styles, and logic they need for proper running, you can securely move them around. They basically work out of the box and let you create loosely-coupled apps in which components communicate with each other solely via APIs.</p>
    <h3>Reusability</h3>
    <p>Components are reusable, so you only have to write them once, then you can run them everywhere. You can&apos;t only reuse components within the same application but also in other apps built with the same framework.</p>
    <h3>Dynamic Functionality</h3>
    <p>As CSS-in-JS is essentially JavaScript code, you can apply complex logic to your style rules, such as loops, conditionals, variables, state-based styling, and more. Therefore, it&apos;s an ideal
      solution if you need to create a complicated UI that requires dynamic functionality.</p>
    <h2>Disadvantages of CSS-in-JS</h2>
    <p>Although CSS-in-JS libraries allow you to build component-based applications in a logical and efficient manner, they also have some characteristics that might make you wary of them.</p>
    <h3>Learning Curve</h3>
    <p>CSS-in-JS definitely has a learning curve, especially if you have used neither component-based frameworks nor web components before. Besides learning the new syntax, you also need to pick
      up a new way of thinking, which needs time and might slow down your development workflow for a while.</p>
    <h3>Extra Layer of Complexity</h3>
    <p>Putting a CSS-in-JS library into use adds an extra layer to your front-end stack, which can sometimes be unnecessary. Although CSS-in-JS manages complexity excellently, it&apos;s not always
      worth the hassle, especially in the case of a simpler project.</p>
    <h3>Code Readability</h3>
    <p>Automatically generated selectors significantly worsen code readability. This can be a huge concern for you if you regularly use your browser&apos;s developer tools for debugging, but also for
      beginners, as it&apos;s essential for them to understand the code they wrote.</p>
    <h2>So, When Should You Use CSS-in-JS Libraries?</h2>
    <p>CSS-in-JS libraries provide you with a straightforward and secure methodology to style component-based applications. Besides JavaScript frameworks, you can also use them together with Web
      Components. They can also come in handy if you want to create a complex UX for a monolithic front-end, such as state-based functionality.</p>
    <p>On the other hand, CSS-in-JS is probably not for you if you are a beginner developer, want to create websites without a dynamic front-end, or appreciate simplicity and code readability. You
      might reasonably find that your go-to tools such as Sass or PostCSS are perfect for your goals and that you don&apos;t want to pick up a new technology just for the sake of novelty.</p>
    <h3>Learn More About CSS-in-JS and Web Components</h3>
    <p>However you decide, CSS-in-JS will most likely further gain traction in front-end development. If you are interested in the in-depth working of these libraries, check out the articles of Oleg Isonen, the creator of the JSS framework about <a href="https://medium.com/dailyjs/what-is-actually-css-in-js-f2f529a2757" rel="external" target="_blank">What actually is CSS-in-JS?</a> and <a href="https://medium.com/free-code-camp/the-tradeoffs-of-css-in-js-bee5cf926fdb" rel="external" target="_blank">The tradeoffs of CSS-in-JS</a>, too.</p>
  </ArticleBase>;
}
