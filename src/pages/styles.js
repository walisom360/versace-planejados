import styled from 'styled-components';

export const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(2,1fr);
  grid-gap:80px;


  @media (max-width:808px) {
    grid-template-columns:repeat(1,1fr);
  }
`;
