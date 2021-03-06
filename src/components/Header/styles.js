import styled from 'styled-components';

export const Container = styled.div`
  p {
  margin: 0.75rem;
}

#navbar {
  display: flex;
  position: sticky;
  top: 0;

  color: #170db3;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  height: 88px;
  padding: 1rem;
  width: 100%;
  border-bottom: 1px solid #ccc;
 
  background-color: #ffff;

}

#navbar h1 {
  color: #e32f5d;
  font-size: 45px;
  margin: 15px;
}

#navbar ul {
  display: flex;
  align-items: center;
  list-style: none;
 
}

#navbar ul li {
  color: #170db3;
  padding: 0.75rem;
  margin: 0 0.25rem;
  list-style: none;
  padding-bottom:4px;
}

#navbar ul li a {
  color: #170db3;
  font-size: 17px;
  margin-right:8px;
}

#navbar ul li:hover {
  cursor: pointer;
  border-bottom: 2px solid #c71a1a;
  transition: border-bottom 2px solid #c71a1a 4s;
}

.active {
  cursor: pointer;
  border-bottom: 2px solid #c71a1a;
}

/* scroll main total */

/* Smartphone views */
/* @media (max-width: 500px) {
  #navbar {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 140px;
  }
  #navbar h1 {
    font-size: 26px;
  }

  #navbar .logo {
    margin-bottom: 1.75rem;
    text-align: center;
  }

  #navbar ul {
    padding: 0.5rem;
  }
} */
`;





