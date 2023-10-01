import { useDispatch, useSelector } from "react-redux";
import { findContacts } from '../../Redux/FilterSlice';
import { FilterInput, ContainerFilter, TitleFilter } from "./Filter.styled";

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <ContainerFilter>
      <TitleFilter>Search contacts by name:</TitleFilter>
      <FilterInput
        type="text"
        name="filter"
        placeholder="enter search name"
        value={useSelector(state => state.filter.filterValue)}
        onChange={e => {
          dispatch(findContacts(e.target.value));
        }}
      ></FilterInput>
    </ContainerFilter>
  );
};