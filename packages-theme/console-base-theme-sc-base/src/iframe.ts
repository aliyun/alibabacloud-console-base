import styled from 'styled-components';

// 需要 `display: block` 否则会在 iframe 下方有一些空隙，导致多滚轴
// iframe 的浏览器设定是 `display: inline`
export default styled.iframe`
  display: block;
  border: 0;
`;