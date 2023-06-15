import css from './Contacts.module.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const NameInputId = nanoid();

export const Contacts = () => {
  const [name, setName] = useState('');
  const [contacts, setContacts] = useState([]);
  return (
    <div className={css.contacts}>
      <label>Name </label>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <button
        type="submit"
        onClick={() => {
          setContacts([...contacts, { id: NameInputId, name: name }]);
        console.log(contacts);
        }}
      >
        Add contact
      </button>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
};
