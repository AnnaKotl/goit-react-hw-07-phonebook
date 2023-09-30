import React from 'react';
import { Filter } from '../Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'services/API';
import { selectContacts, selectError, selectIsLoading, selectFilter } from 'Redux/selectors';

export const FormItems = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Filter/>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <b>Error: {error}</b>}
      {contacts?.length > 0 && (
        <ul>
          {(filter.length > 0
              ? contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
              : contacts
            ).map(item =>( 
            <li key={item.id}>
              {item.name}: {item.phone}
              <button onClick={() => dispatch(deleteContact(item.id))}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
