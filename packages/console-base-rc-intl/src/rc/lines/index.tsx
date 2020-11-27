/* eslint-disable react/no-array-index-key */
import React from 'react';

import {
  IPropsLines
} from '../../types';
import {
  ETypeLine
} from '../../const';
import makeHtmlProps from '../../util/make-html-props';

export default function Lines({
  type,
  items,
  html
}: IPropsLines): JSX.Element {
  switch (type) {
    case ETypeLine.OL:
      return <ol>
        {items.map((v, i) => (html ? <li key={i} {...makeHtmlProps(v)} /> : <li key={i}>{v}</li>))}
      </ol>;
    case ETypeLine.UL:
      return <ul>
        {items.map((v, i) => (html ? <li key={i} {...makeHtmlProps(v)} /> : <li key={i}>{v}</li>))}
      </ul>;
    case ETypeLine.HR:
      return <hr />;
    default:
      return <>
        {items.map((v, i) => (html ? <p key={i} {...makeHtmlProps(v)} /> : <p key={i}>{v}</p>))}
      </>;
  }
}
