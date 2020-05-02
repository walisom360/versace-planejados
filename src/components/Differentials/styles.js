import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  padding:40px 10px;
`;


export const Card = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;

  div{
      span{
          display:block;
      }
  }

  background: #FFFFFF 0% 0% no-repeat padding-box;
  height:100px;
  width:250px;
  box-shadow: 0px 3px 6px #00000029;
`;

