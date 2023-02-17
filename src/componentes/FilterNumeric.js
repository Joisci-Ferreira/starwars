import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const options = ['population', 'orbital_period', 'diameter',
  'rotation_period', 'surface_water'];

function FilterNumeric() {
  const {
    handleColumnChange,
    handleComparisonChange,
    handleValueChange,
    handleFilterClick,
    value,
    filterByNumericValues,
  } = useContext(PlanetsContext);

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ handleColumnChange }
      >
        {
          options.filter((obj) => !(filterByNumericValues
            .some((element) => element.column === obj)))
            .map((option) => (
              <option key={ option } value={ option }>{ option }</option>
            ))
        }
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ handleComparisonChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        onChange={ handleValueChange }
        value={ value }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilterClick }
      >
        FILTRAR

      </button>

    </div>
  );
}

export default FilterNumeric;
