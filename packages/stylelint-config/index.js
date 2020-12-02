'use strict';

// lowercase-single-dashed-names-only-0
const namingPattern = /^-?[a-z0-9]+(-[a-z0-9]+)*$/;

module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'at-rule-no-unknown': true,
    'at-rule-no-vendor-prefix': true,
    'block-opening-brace-space-before': 'always-multi-line',
    'color-hex-length': 'short',
    'color-named': 'never',
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-colon-newline-after': null,
    'declaration-colon-space-after': 'always',
    'declaration-empty-line-before': ['never', {
      ignore: ['after-declaration']
    }],
    'declaration-no-important': null, // 无法避免，加 important 的地方必须加注释
    'font-family-name-quotes': 'always-where-recommended',
    'font-weight-notation': 'numeric',
    'function-max-empty-lines': 1,
    'function-url-quotes': 'never',
    indentation: [2, {
      // align multiline property values
      ignore: ['value']
    }],
    'length-zero-no-unit': true,
    'max-empty-lines': 3,
    'max-line-length': 200,
    'max-nesting-depth': [6, {
      severity: 'warning'
    }],
    'media-feature-name-no-vendor-prefix': true,
    'no-descending-specificity': null,
    'no-duplicate-selectors': true,
    'no-unknown-animations': true,
    'no-missing-end-of-source-newline': null,
    'no-eol-whitespace': [true, {
      ignore: ['empty-lines']
    }],
    'no-invalid-double-slash-comments': null,
    'number-max-precision': 8,
    'number-no-trailing-zeros': true,
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': ['always-multi-line', {
      except: ['first-nested'],
      ignore: ['after-comment']
    }],
    'selector-attribute-quotes': 'never',
    'selector-class-pattern': namingPattern,
    'selector-id-pattern': namingPattern,
    'selector-max-compound-selectors': [6, {
      severity: 'warning'
    }],
    // id, class, type
    'selector-max-specificity': '1,3,3',
    'selector-max-id': 1,
    'selector-max-universal': 0,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: ['global'] // :global is used by css modules
    }],
    'selector-pseudo-element-colon-notation': 'single',
    'string-quotes': 'single',
    'time-min-milliseconds': 100,
    'unit-blacklist': ['pt'],
    'value-keyword-case': 'lower',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-no-vendor-prefix': true,
    'order/order': [[
      'custom-properties',
      'at-variables',
      'dollar-variables',
      'declarations', {
        type: 'at-rule',
        name: 'include'
      },
      'rules'
    ], {
      unspecified: 'ignore'
    }],
    // property order is defined in a separate file for legibility
    'order/properties-order': [[
      'content',
      'display',
      // grid
      'grid',
      'grid-auto-flow',
      'grid-auto-columns',
      'grid-auto-rows',
      'grid-gap',
      'grid-column-gap',
      'grid-row-gap',
      'grid-template',
      'grid-template-areas',
      'grid-template-columns',
      'grid-template-rows',
      // flex
      'flex',
      'flex-basis',
      'flex-direction',
      'flex-flow',
      'flex-grow',
      'flex-shrink',
      'flex-wrap',
      'align-content',
      'align-items',
      'align-self',
      'justify-content',
      'order',
      // position
      'position',
      'top',
      'right',
      'bottom',
      'left',
      // column
      'columns',
      'column-count',
      'column-width',
      'column-gap',
      'column-fill',
      'column-rule',
      'column-span',
      // floating
      'float',
      'clear',
      // can the box be seen?
      'visibility',
      'opacity',
      'z-index',
      // margin and padding
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      // border
      'border',
      'border-top',
      'border-right',
      'border-bottom',
      'border-left',
      'border-width',
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',
      'border-style',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',
      'border-color',
      'border-top-color',
      'border-right-color',
      'border-bottom-color',
      'border-left-color',
      'border-radius',
      'border-top-left-radius',
      'border-top-right-radius',
      'border-bottom-left-radius',
      'border-bottom-right-radius',
      'border-collapse', // just for table
      'border-spacing', // just for table
      
      'box-shadow',
      'box-sizing',
      
      'outline',
      // Content dimensions and background and scrollbars
      'background',
      'background-clip',
      'background-color',
      'background-image',
      'background-position',
      'background-repeat',
      'background-size',
      // size
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'line-height', // for text
      // overflow
      'overflow',
      'overflow-x',
      'overflow-y',
      // cursor
      'cursor',
      // special content types: lists, tables
      'list-style',
      'caption-side',
      'table-layout',
      'empty-cells',
      // textual content
      'font',
      'font-family',
      'font-size',
      'font-weight',
      'font-style',
      'font-smoothing',
      'vertical-align',
      'text-align',
      'text-decoration',
      'text-indent',
      'text-overflow',
      'text-rendering',
      'text-shadow',
      'text-transform',
      'letter-spacing',
      'word-spacing',
      'white-space',
      'word-wrap',
      'word-break',
      'color',
      'quotes',
      // transform
      'transform',
      'transform-origin',
      // transitions change previously defined properties
      'transition',
      'transition-property',
      'transition-duration',
      'transition-timing-function',
      'transition-delay'
    ], {
      unspecified: 'bottomAlphabetical'
    }]
  }
};
