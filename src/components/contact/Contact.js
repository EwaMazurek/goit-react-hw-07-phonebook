import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.container}>
      <p>
        {contact.name}: {contact.phone} id: {contact.id}
      </p>
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
