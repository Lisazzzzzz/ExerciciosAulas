import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './main';
import styled from 'styled-components';
import Identificacao from './identificacao';
import App_1 from './ex1/App_1';
import App_2 from './ex2/App_2';
import App_3 from './ex3/App_3';
import { store } from './ex3/store/store';
import { Provider } from 'react-redux';
import App_4 from './ex4/App_4';
import App_5 from './ex5/App_5';


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Main />
      <MainContainer>
      <Routes>
        <Route path="/" element={<Identificacao />} />
          <Route path="/exercicio1" element={<App_1 />} />
          <Route path="/exercicio2" element={<App_2 />} />
          <Route path="/exercicio3" element={<App_3/>} />
          <Route path="/exercicio4" element={<App_4/>} />
          <Route path="/exercicio5" element={<App_5/>} />

      </Routes>
      </MainContainer>
    </Router>
    </Provider>
  );
}

export default App;



const MainContainer = styled.main`
  padding-top: 60px; 
`;