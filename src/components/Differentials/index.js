import React from 'react';

import { Container,Card,Title } from './styles';
import {FaUser,FaStar,FaTruckPickup} from 'react-icons/fa'


export default function Differentials() {
  return (
     <> 
    <Title>Diferenciais da Verssace Planejados</Title>
   <Container>
   


    
    <Card>
    <FaTruckPickup color="green" size={58} />

<div>
<span>Prazos</span>
<span>Diferenciados</span>
</div>
    </Card>
   
     <Card>
     <FaUser size={28} />

<div>
<span>Atendimento</span>
<span>Personalizado</span>
</div>
     </Card>
      <Card>
      <FaStar color="#ffa100" size={48} />

<div>
<span>10 anos de</span>
<span>Experiência</span>
</div>
      </Card>
      </Container>   

      </> 
  );
}
