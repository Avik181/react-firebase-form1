import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState({
    fname: "",
    lname: "",
    email: ""
  });
  let Username, Uservalue;
  const inputEvent = (e) => {
    Username: e.target.Username;
    Uservalue: e.target.Uservalue;

    setName({ ...name, [Username]: Uservalue });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const { fname, lname, email } = name;
    const res = await fetch(
      "https://react-form-9d800-default-rtdb.firebaseio.com/userDataRecord.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname,
          lname,
          email
        })
      }
    );
    if (res) {
      alert("Data stored");
    } else alert("Please fill the data properly");
  };

  return (
    <div className="App">
      <h1>
        Hello {name.fname} {name.lname}
      </h1>
      <h3> {name.email} </h3>
      <form className="App">
        <input
          type="text"
          Username="fname"
          placeholder="Enter your first name"
          onChange={inputEvent}
          Uservalue={name.fname}
        />
        <input
          type="text"
          Username="lname"
          placeholder="Enter your last name"
          onChange={inputEvent}
          Uservalue={name.lname}
        />
        <input
          type="email"
          Username="email"
          placeholder="Enter your email"
          onChange={inputEvent}
          Uservalue={name.email}
        />
        <button type="submit" onClick={submitData}>
          Submit
        </button>
      </form>
    </div>
  );
}
