import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectFilteredContacts } from '../../redux/selectors';
import { deleteContact, fetchContacts } from '../../redux/operations';
import css from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => {
        const indexOfX = number.indexOf('x');
        const displayPhone =
          indexOfX !== -1
            ? number.substring(0, indexOfX).replace(/\./g, '-')
            : number.replace(/\./g, '-');
        return (
          <li className={css.item} key={id}>
            <span>{name}:</span>
            <span className={css.number}>{displayPhone}</span>
            <button
              className={css.button}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
