import { Component } from "react";
import shortid from "shortid";
import propTypes from "prop-types";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <input
          id={this.nameInputId}
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Casnumbermore d'Artagnan и т. п."
          required
          onChange={this.handleChange}
        />
        <label htmlFor={this.numberInputId}>Number</label>
        <input
          id={this.numberInputId}
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={this.handleChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addContact: propTypes.func.isRequired,
};

export default ContactForm;
