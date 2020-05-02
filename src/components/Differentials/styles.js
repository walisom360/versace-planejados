import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  width:100%;
  padding:40px 10px;

  @media (max-width:808px) {
    flex-direction:column;
    justify-content:center;
    align-items:center;

    > div{
        margin-top:40px;
        margin-bottom:5px;
        border-bottom:1px solid #ccc;
    }
 
  }
`;


export const Card = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;

  @media (max-width:808px) {
    > div{
        margin-bottom:5px;
        
        svg{
            margin-bottom:10px;
        }
    }
  }



  div{
      span{
          display:block;
          text-align:center;
      }
  }

  background: #FFFFFF 0% 0% no-repeat padding-box;
  height:100px;
  width:250px;
  box-shadow: 0px 3px 6px #00000029;
`;


export const Title = styled.h2`
   text-align:center;
   font-size:28px;
   margin-top:62px;
  color:rebeccapurple;
`

