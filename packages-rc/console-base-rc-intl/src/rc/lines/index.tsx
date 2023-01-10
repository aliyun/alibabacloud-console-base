/* eslint-disable react/no-array-index-key */
import React from 'react';

import {
  ETypeLine
} from '../../enum';
import {
  ILinesProps
} from '../../types';

export default function Lines({
  type,
  items,
  html
}: ILinesProps): JSX.Element {
  switch (type) {
    case ETypeLine.OL:
      return <ol>
        {items.map((v, i) => (html ? <li key={i} {...{
          dangerouslySetInnerHTML: {
            __html: v
          }
        }} /> : <li key={i}>{v}</li>))}
      </ol>;
    case ETypeLine.UL:
      return <ul>
        {items.map((v, i) => (html ? <li key={i} {...{
          dangerouslySetInnerHTML: {
            __html: v
          }
        }} /> : <li key={i}>{v}</li>))}
      </ul>;
    case ETypeLine.HR:
      return <hr />;
    default:
      return <>
        {items.map((v, i) => (html ? <p key={i} {...{
          dangerouslySetInnerHTML: {
            __html: v
          }
        }} /> : <p key={i}>{v}</p>))}
      </>;
  }
}
