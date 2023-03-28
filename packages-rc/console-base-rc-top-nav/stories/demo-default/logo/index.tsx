import React from 'react';

interface IProps {
  color?: string;
}

export default function Logo({
  color = '#ff6a00'
}: IProps): JSX.Element {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 18" width="80" height="18">
    <g fill={color}>
      <path d="M57.56 13.63h5.76v-1.8h-5.76V9.98h5.58V.55H50.16v9.44h5.58v1.83h-5.78v1.81h5.78v2h-6.22v1.82h14.34v-1.81h-6.22v-2h-.08Zm.17-11.27h3.79v2h-3.79v-2Zm0 3.82h3.79v1.91h-3.79V6.18Zm-1.81 1.91h-3.79V6.18h3.79v1.91Zm0-3.72h-3.79v-2h3.79v2ZM9.48 7.8h9.46V10H9.48V7.81Z" />
      <path d="M23.62 0h-6.21l1.53 2.18 4.5 1.46a2.04 2.04 0 0 1 1.37 1.9v6.92c0 .82-.55 1.63-1.36 1.9l-4.51 1.46L17.4 18h6.21c2.63 0 4.7-2.1 4.7-4.72V4.8A4.76 4.76 0 0 0 23.63 0ZM4.86 14.36a2.02 2.02 0 0 1-1.34-1.9V5.54c0-.82.53-1.63 1.34-1.9l4.51-1.46L10.92 0H4.7A4.76 4.76 0 0 0 0 4.81v8.38a4.68 4.68 0 0 0 4.69 4.72h6.23l-1.55-2.18-4.5-1.37Zm39.06-10h-4.6v9.54h4.6V4.37ZM42.03 12h-.98V6.18h.98V12Zm-9.47 5.45h1.81V2.36h1.89l-1.08 5v1.82h1.08v4c0 .28-.18.45-.44.45h-.46v1.83h.9c1 0 1.81-.83 1.81-1.83V7.28h-1.1l1.1-5V.45h-5.51v16.99Z" />
      <path d="M38.88 2.36h6.22V14.1c0 .82-.63 1.55-1.53 1.55H42.2v1.81h1.9a2.92 2.92 0 0 0 2.9-2.91V2.36h.61V.55h-8.74v1.81ZM66.3.64h12.99v1.81h-13V.64ZM80 9.27V7.46H65.66v1.8h3.61l-2.89 6.38v1.81h12.2a.9.9 0 0 0 .9-.9c0-.18 0-.27-.1-.38l-1.53-3.44h-1.99l1.36 2.9h-8.76l2.89-6.36H80Z" />
    </g>
  </svg>;
}