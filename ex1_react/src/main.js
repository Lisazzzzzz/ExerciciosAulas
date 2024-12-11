import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Main() {
  return (
    <MainContainer>
      <MainList>
        <MainItem>
          <StyledLink to="/exercicio1">Exercício 1</StyledLink>
        </MainItem>
        <MainItem>
          <StyledLink to="/exercicio2">Exercício 2</StyledLink>
        </MainItem>
        <MainItem>
          <StyledLink to="/exercicio3">Exercício 3</StyledLink>
        </MainItem>
        <MainItem>
          <StyledLink to="/exercicio4">Exercício 4</StyledLink>
        </MainItem>
        <MainItem>
          <StyledLink to="/exercicio5">Exercício 5</StyledLink>
        </MainItem>
      </MainList>
    </MainContainer>
  );
}

export default Main;


const MainContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0; 
  width: 100vw; 
  background-color: #6a0dad; 
  color: white;
  padding: 20px 30px;
  z-index: 1000; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const MainList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: flex-start;
  gap: 15px;
`;

const MainItem = styled.li`
  font-size: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #d3bfff; 
  }
`;