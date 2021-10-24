import { Component } from "react";
import shortid from "shortid";
import Filter from "./components/Filter/Filter";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.contacts, prevState.contacts);
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    if (this.state.contacts.find((contact) => contact.name === name)) {
      alert(`${name} is alrteady in contacts.`);
      return;
    }
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: shortid.generate(),
            name: name,
            number: number,
          },
        ],
      };
    });
  };

  handleDelete = (contactId) => {
    this.setState({
      contacts: this.state.contacts.reduce((acc, el) => {
        if (el.id !== contactId) {
          acc.push(el);
        }
        return acc;
      }, []),
    });
  };

  handleFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
