import { useState, useRef } from "react";
import shortid from "shortid";
import propTypes from "prop-types";

function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const nameInputId = useRef(shortid.generate());
  const numberInputId = useRef(shortid.generate());

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(name, number);
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <input
        id={nameInputId}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Casnumbermore d'Artagnan и т. п."
        required
        onChange={(e) => {
          setName(e.currentTarget.value);
        }}
      />
      <label htmlFor={numberInputId}>Number</label>
      <input
        id={numberInputId}
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        onChange={(e) => {
          setNumber(e.currentTarget.value);
        }}
      />
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: propTypes.func.isRequired,
};

export default ContactForm;
