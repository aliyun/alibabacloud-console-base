import styled from 'styled-components';

export default styled.hr`
  margin: 1em 0;
  border: 0;
  border-bottom: 0.5px solid #ddd;
  height: 0;
  
  .theme-dark & {
    border-bottom: 0.5px solid #666;
  }
`;
