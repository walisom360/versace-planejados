import styled from 'styled-components';

export const Background = styled.div`
  filter: brightness(80%);

  
  background: url(${props => props.banner})
    no-repeat;
  background-size: 100% 100%;
  -webkit-font-smoothing: antialiased !important;
  width: 100%;
  height: 420px;
  position: absolute;
  object-fit: fill;
  z-index: -3;
`;