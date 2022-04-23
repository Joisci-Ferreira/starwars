import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Header() {
  const { handleChange } = useContext(PlanetsContext);

  return (
    <header>
      <h2>Projeto Star Wars - Trybe</h2>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </header>
  );
}

export default Header;
