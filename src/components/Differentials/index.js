import React from 'react';

import { Container,Card } from './styles';
import {FaUser} from 'react-icons/fa'


export default function Differentials() {
  return (
   <Container>
    <Card>
    <FaUser size={28} />

    <div>
    <span>Atendimento</span>
    <span>Personalizado</span>
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
     <FaUser size={28} />

<div>
<span>Atendimento</span>
<span>Personalizado</span>
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
      <FaUser size={28} />

<div>
<span>Atendimento</span>
<span>Personalizado</span>
</div>
      </Card>
      </Container>   
  );
}
