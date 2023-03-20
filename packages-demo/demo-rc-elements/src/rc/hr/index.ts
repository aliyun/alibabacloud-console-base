import styled from 'styled-components';

export default styled.hr`
  margin: 8px 0;
  padding: 0;
  border: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0%, #e3e4e6 50%, rgba(255, 255, 255, 0.08) 100%);
  height: 1px;
  
  .theme-dark & {
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.066667) 0%, #67676f 50%, rgba(0, 0, 0, 0.066667) 100%);
  }
`;
