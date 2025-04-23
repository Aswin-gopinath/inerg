import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedState } from '../redux/covidSlice';
const StateFilter = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.covid.data);
 
  const states = [...new Set(data.map(item => item.state))];
  const handleChange = (e) => {
    dispatch(setSelectedState(e.target.value));
  };
  

  return (
    <>
    <select onChange={handleChange}>
      <option value="">All States</option>
      {states.map(state => (
        <option key={state} value={state}>{state}</option>
      ))}
    </select>
    </>
  );
};

export default StateFilter;
