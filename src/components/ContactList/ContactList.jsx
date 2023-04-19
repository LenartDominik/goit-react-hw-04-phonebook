import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, deleteContact, filter }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const handleDelete = id => {
    deleteContact(id);
  };

  return (
    <ul className={css.items}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <p>
            {' '}
            <b>Name: </b> {contact.name}{' '}
          </p>
          <p>
            <b>Number: </b>
            {contact.number}
          </p>
          <button id={contact.id} onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
  filter: PropTypes.string,
};

