import React from 'react';
import BackGroundImg from '../../assets/background.png';
import {Container, Slogan, Title} from './styles';

export function SignIn() {
  return (
    <Container source={BackGroundImg}>
      <Title>Ignite fleet</Title>
      <Slogan>Gestão de uso de veiculos</Slogan>
    </Container>
  );
}
