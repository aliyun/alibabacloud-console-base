import styled from 'styled-components';

// input 有个诡异的宽度，需要一个容器限制一下（然后在 input 上设一个 width: 100%）
export default styled.span`
  display: block;
  flex: 1;
`;