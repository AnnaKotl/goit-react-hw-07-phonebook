import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'services/API';
import { selectContacts, selectError, selectIsLoading, selectFilter } from 'Redux/selectors';

import { Filter } from '../Filter/Filter';
import { ContainerItems, ButtonDel, Item } from './FormItems.styled';

export const FormItems = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = filter.length > 0
    ? contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
    : contacts;

  return (
    <ContainerItems>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <b>Error: {error}</b>}
      {filteredContacts.length > 0 ? (
        <ul>
          {filteredContacts.map(item => (
            <Item key={item.id}>
              {item.name}: {item.phone}
              <ButtonDel onClick={() => dispatch(deleteContact(item.id))}>Delete</ButtonDel>
            </Item>
          ))}
        </ul>
      ) : (
        <b>No contacts found.</b>
      )}
    </ContainerItems>
  );
};
