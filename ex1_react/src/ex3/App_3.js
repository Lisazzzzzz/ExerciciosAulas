import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { depositar, levantar } from './features/slice';
import styled from 'styled-components';

const App_3 = () => {
    const [inputValue, setInputValue] = useState(""); 
    const saldo = useSelector((state) => state.banco.saldo); 
    const dispatch = useDispatch();

    const handleLevantar = () => {
        const valor = Number(inputValue);
        if (isNaN(valor) || valor <= 0) {
            alert("Por favor insira um valor válido para levantar.");
            return;
        }
        dispatch(levantar(valor)); // O Redux Toolkit usa "payload"
        setInputValue(""); 
    };

    const handleDepositar = () => {
        const valor = Number(inputValue);
        if (isNaN(valor) || valor <= 0) {
            alert("Por favor insira um valor válido para depositar.");
            return;
        }
        dispatch(depositar(valor)); // O Redux Toolkit usa "payload"
        setInputValue(""); 
    };

    return (
        <AppContainer>
      <Card>
        <Title>Multibanco Virtual</Title>
        <Balance>Saldo Atual: {saldo} €</Balance>
        <Actions>
          <Input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} 
          />
          <Button className="levantar" onClick={handleLevantar}>
            Levantar
          </Button>

          <Button className="depositar" onClick={handleDepositar}>
            Depositar
          </Button>
        </Actions>
      </Card>
    </AppContainer>
    );
};

export default App_3;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f9;
  font-family: Arial, sans-serif;
`;

const Card = styled.section`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h1`
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const Balance = styled.h4`
  color: #555;
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: calc(100% - 20px);
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.depositar {
    background-color: #28a745;
  }

  &.depositar:hover {
    background-color: #218838;
  }

  &.levantar {
    background-color: #dc3545;
  }

  &.levantar:hover {
    background-color: #c82333;
  }
`;