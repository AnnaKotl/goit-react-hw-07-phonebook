import React from 'react';
import { FilterInput } from './styles/Filter.styled';

export const Filter = ({ value, onChange }) => (
  <FilterInput
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Filter contacts by name"
  />
);