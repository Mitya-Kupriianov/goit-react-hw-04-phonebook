import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';

export default function ContactList({ contacts, filter, idDelete }) {
  return (
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(({ id, name, number }) => {
          return (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              id={id}
              idDelete={idDelete}
            />
          );
        })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  idDelete: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
