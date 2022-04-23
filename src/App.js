import React from 'react';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';
import Header from './componentes/Header';
import FilterNumeric from './componentes/FilterNumeric';
import Table from './componentes/Table';

function App() {
  return (
    <PlanetsProvider>
      <Header />
      <FilterNumeric />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
