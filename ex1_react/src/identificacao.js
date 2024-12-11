import React from 'react';
import styled from 'styled-components';

function Identificacao() {
  return (
    <SectionContainer>
      <Title>Exercicios Celina Cruz</Title>
      <Text>Estes exercicios estão a ser feitos para consolidar os conteúdos abordados na aula.</Text>
    </SectionContainer>
  );
}

export default Identificacao;


const SectionContainer = styled.div`
  padding: 20px;
  margin: 20px auto;
  max-width: 600px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  color: #6a0dad; 
  margin-bottom: 10px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 16px;
  color: #333; 
  line-height: 1.6;
  text-align: center;
`;