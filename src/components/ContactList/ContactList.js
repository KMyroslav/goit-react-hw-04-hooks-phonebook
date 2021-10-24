import propTypes from "prop-types";

function ContactList({ contacts, filter, handleDelete }) {
  return (
    <div>
      {contacts
        .filter((obj) => obj.name.toLowerCase().includes(filter.toLowerCase()))
        .map((e) => (
          <p key={e.id}>
            {e.name}: {e.number}
            <button
              type="button"
              data-id={e.id}
              onClick={() => {
                handleDelete(e.id);
              }}
            >
              Delete
            </button>
          </p>
        ))}
    </div>
  );
}

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
  filter: propTypes.string.isRequired,
  handleDelete: propTypes.func.isRequired,
};

export default ContactList;
