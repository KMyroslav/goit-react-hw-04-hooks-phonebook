import { useState, useEffect } from "react";
import shortid from "shortid";
import Filter from "./components/Filter/Filter";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    if (!contacts) {
      return;
    }
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is alrteady in contacts.`);
      return;
    }

    setContacts((prevState) => [
      ...prevState,
      { id: shortid.generate(), name: name, number: number },
    ]);
  };

  const handleDelete = (contactId) => {
    setContacts(
      contacts.reduce((acc, el) => {
        if (el.id !== contactId) {
          acc.push(el);
        }
        return acc;
      }, [])
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter
        filter={filter}
        handleFilter={(e) => setFilter(e.currentTarget.value)}
      />
      <ContactList
        contacts={contacts}
        filter={filter}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
