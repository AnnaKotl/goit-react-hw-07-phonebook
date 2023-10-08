import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'services/API';
import { selectContacts, selectError, selectIsLoading, selectStatusFilter } from 'Redux/selectors';

import { Filter } from '../Filter/Filter';
import { ContainerItems, ButtonDel, Item } from './FormItems.styled';

export const FormItems = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerItems>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <b>Error: {error}</b>}
      {contacts?.length > 0 && (
        <ul>
          {(filter.length > 0
              ? contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
              : contacts
            ).map(item =>( 
            <Item key={item.id}>
              {item.name}: {item.phone}
              <ButtonDel onClick={() => dispatch(deleteContact(item.id))}>Delete</ButtonDel>
            </Item>
          ))}
        </ul>
      )}
    </ContainerItems>
  );
};
