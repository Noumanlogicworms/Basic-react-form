import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmitted = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (value.firstName && value.lastName && value.email) {
      setValid(true);
     
    }
     setTimeout(() => {
       setValid(false);
       setSubmitted(false);
       setValue({
         firstName: "",
         lastName: "",
         email: "",
       });
     }, 6000);
  };
  const handleFirstName = (event) => {
    setValue({ ...value, firstName: event.target.value });
  };

  const handleLastName = (event) => {
    setValue({ ...value, lastName: event.target.value });
  };

  const handleEmail = (event) => {
    setValue({ ...value, email: event.target.value });
  };

  return (
    <div className="App-header">
      <div className="title">
        <h1>Basic Form</h1>
        <small className="small">(React App)</small>
      </div>
      <form className="basic-form" onSubmit={handleSubmitted}>
        {submitted && valid ? (
          <div className="success-message ">
            Success ! Thank You for registration
          </div>
        ) : null}
        <div className="mb-3">
          <input
            onChange={handleFirstName}
            value={value.firstName}
            type="text"
            className="form-control"
            placeholder="First Name"
          />
          {submitted && !value.firstName ? (
            <span className="error-message">Please Enter First Name</span>
          ) : null}
        </div>
        <div className="mb-3">
          <input
            onChange={handleLastName}
            value={value.lastName}
            type="text"
            className="form-control"
            placeholder="Last Name"
          />
          {submitted && !value.lastName ? (
            <span className="error-message">Please Enter Last Name</span>
          ) : null}
        </div>
        <div className="mb-3">
          <input
            onChange={handleEmail}
            value={value.email}
            type="email"
            className="form-control"
            placeholder="Email"
          />
          {submitted && !value.email ? (
            <span className="error-message">Please Enter Email</span>
          ) : null}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
