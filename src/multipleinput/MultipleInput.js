import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const MultipleInput = () => {
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    userName: "",
  });

  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (person.firstName && person.email && person.userName) {
      const newPerson = { ...person, id: uuidv4() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", userName: "" });
    }
  };

  return (
    <>
      <form>
        <div className="input-group">
          <label htmlFor="firstName">Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={person.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="userName">User name:</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={person.userName}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Add person
        </button>
      </form>
      <div style={{ marginTop: "7rem" }}>
        {people.map((person) => {
          const { id, firstName, email, userName } = person;
          return (
            <div key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{userName}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MultipleInput;
