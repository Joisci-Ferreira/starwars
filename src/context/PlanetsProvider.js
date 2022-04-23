import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetsContext';

import planetsApi from '../services/planetsAPI';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filterByName, setfilterByName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparisom, setComparisom] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filtered, setFilterd] = useState([]);
  const [filterByNumericValues, setfilterBuNumericValues] = useState([]);

  console.log(data);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await planetsApi();
      setData(response.results);
      setFilterd(response.results);
    };
    fetchPlanets();
  }, []);

  const handleChange = (event) => {
    const planetName = event.target.value;
    setfilterByName(planetName);
  };

  const handleColumnChange = (event) => {
    const columnName = event.target.value;
    setColumn(columnName);
  };

  const handleComparisonChange = (event) => {
    const comparator = event.target.value;
    setComparisom(comparator);
  };

  const handleValueChange = (event) => {
    const number = event.target.value;
    setValue(number);
  };

  const handleFilterClick = () => {
    setfilterBuNumericValues((prevState) => (
      [...prevState, {
        column,
        comparisom,
        value,
      }]
    ));

    if (comparisom === 'maior que') {
      setFilterd(filtered.filter((planet) => (+planet[column] > value)));
    } else if (comparisom === 'menor que') {
      setFilterd(filtered.filter((planet) => (+planet[column] < value)));
    } else if (comparisom === 'igual a') {
      setFilterd(filtered.filter((planet) => (planet[column] === value)));
    }
  };

  return (
    <PlanetContext.Provider
      value={ {
        data:
        filtered,
        filterByName,
        column,
        comparisom,
        value,
        filterByNumericValues,
        handleChange,
        handleColumnChange,
        handleComparisonChange,
        handleValueChange,
        handleFilterClick,
      } }
    >
      { children }
    </PlanetContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
