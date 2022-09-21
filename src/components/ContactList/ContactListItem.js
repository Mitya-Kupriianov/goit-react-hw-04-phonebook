import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export default function ContactListItem({ name, number, id, idDelete }) {
  return (
    <li className={s.item}>
      {name}: {number}
      <button className={s.btn} type="button" onClick={() => idDelete(id)}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  idDelete: PropTypes.func.isRequired,
};
