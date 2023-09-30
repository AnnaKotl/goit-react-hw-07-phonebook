import { useDispatch, useSelector } from "react-redux";
import { findContacts } from '../../Redux/FilterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Search contacts by name:</h2>
      <input
        type="text"
        name="filter"
        value={useSelector(state => state.filter.filterValue)}
        onChange={e => {
          dispatch(findContacts(e.target.value));
        }}
      ></input>
    </div>
  );
};