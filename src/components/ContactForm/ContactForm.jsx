import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';

import { selectContacts } from '../../redux/selectors';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);


  const formatPhoneNumber = value => {
    return (
      value
        .replace(/[^0-9-]/g, '')
        .replace(/(-{2,})/g, '-')
        .replace(/(^-|-$)/g, '')
        .replace(/(-)/g, '')
        .match(/.{1,3}/g)
        ?.join('-')
        ?.trim() || ''
    );
  };

  const handleSubmit = event => {
    event.preventDefault();

   const contact = {
     id: nanoid(),
     name: event.currentTarget.elements.name.value,
     number: formatPhoneNumber(event.currentTarget.elements.number.value),
   };


    const isExist = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isExist) {
      return toast.warn(`${contact.name} is already in contacts.`);
    }

    dispatch(addContact(contact));
    event.currentTarget.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.label}>
        <label className={css.labelContainer} htmlFor={nanoid()}>
          Name
          <input
            type="text"
            name="name"
            placeholder='Enter Name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={nanoid()}
            required
          />
        </label>
      </div>
      <div className={css.label}>
        <label className={css.labelContainer} htmlFor={nanoid()}>
          Number
          <input
            type="tel"
            name="number"
            placeholder='Enter number'
            pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={nanoid()}
            required
          />
        </label>
      </div>
      <div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};
