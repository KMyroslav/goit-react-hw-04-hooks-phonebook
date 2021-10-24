import shortid from "shortid";
import propTypes from "prop-types";

function Filter({ filter, handleFilter }) {
  const filterInputId = shortid.generate();

  return (
    <div>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        id={filterInputId}
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Casnumbermore d'Artagnan и т. п."
        onChange={handleFilter}
      />
    </div>
  );
}

Filter.propTypes = {
  filter: propTypes.string,
  handleFilter: propTypes.func.isRequired,
};

export default Filter;
