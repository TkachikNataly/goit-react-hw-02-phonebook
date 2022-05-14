import React from 'react';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';
const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.list__item}>
                <p>{name}</p>
                <p>{number}</p>
                <button className={s.button} onClick={() => onDeleteContact(id)}>
                    Delete
                </button>
            </li>
        ))}
    </ul>
);
ContactList.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func,
};

export default ContactList;