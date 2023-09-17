import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/filterSlice';
import { FilterInput } from './Filter.styled';

export const Filter = () => {
  const currentFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue));
  };

  return (
    <FilterInput
      type="text"
      value={currentFilter}
      onChange={handleFilterChange}
      placeholder="Filter contacts by name"
    />
  );
};

// import React from 'react';
// import { FilterInput } from './Filter.styled';

// export const Filter = ({ value, onChange }) => (
//   <FilterInput
//     type="text"
//     value={value}
//     onChange={onChange}
//     placeholder="Filter contacts by name"
//   />
// );