import React from 'react';

import { Container,Card,Title } from './styles';
import {FaUser,FaStar,FaTruckPickup} from 'react-icons/fa'
import { AiOutlineUser,AiOutlineCar,AiOutlineStar,AiOutlineSetting } from "react-icons/ai";

export default function Differentials() {
  return (
     <> 
    <Title>Diferenciais da Verssace Planejados</Title>
   <Container>
   


    
    <Card>
    <AiOutlineCar  size={58} />

<div>
<span>Prazos</span>
<span>Diferenciados</span>
</div>
    </Card>
   
     <Card>
     <AiOutlineUser size={48} />

<div>
<span>Atendimento</span>
<span>Personalizado</span>
</div>
     </Card>

      
     <Card>
     <AiOutlineSetting size={48} />

<div>
<span>Fabrica Propria</span>
<span>em Goiânia</span>
</div>
     </Card>
      <Card>
      <AiOutlineStar  size={48} />

<div>
<span>10 anos de</span>
<span>Experiência</span>
</div>
      </Card>
      </Container>   

      </> 
  );
}
