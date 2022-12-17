import { useEffect, useState } from "react";

function EmpForm(props) {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(0);
  const [empInfo, setEmpInfo] = useState({ name: "", age: 0 });
  const [isSaved, setSaved] = useState(false);
  const [savedData, setSavedData] = useState({});

  // function onNameChange(event) {
  //   setName(event.target.value);
  // }

  // const onAgeChange = (event) => {
  //   setAge(event.target.value);
  // };

  function onNameChange(event) {
    setEmpInfo((sai) => ({
      ...sai,
      name: event.target.value,
    }));
  }

  function onAgeChange(event) {
    setEmpInfo((sai) => ({
      ...sai,
      age: event.target.value,
    }));
  }

  const save = (e) => {
    e.preventDefault();
    //console.log(name,age)
    console.log("data saved successfully");
    // setEmpInfo((prevState) => ({
    //   ...prevState,
    //   name: name,
    //   age: age,
    // }));
    let user = {
      name: empInfo.name,
      age: empInfo.age,
    };
    localStorage.setItem("user", JSON.stringify(user));
    setSavedData((prevState) => ({
      ...prevState,
      name: empInfo.name,
      age: empInfo.age,
    }));
    setEmpInfo((prevState) => ({
      ...prevState,
      name: "",
      age: "",
    }));

    setSaved(true);
  };

  return (
    <div>
      <form onSubmit={save}>
        <label>Name:</label>
        <input type="text" value={empInfo.name} onChange={onNameChange} />
        <label>Age:</label>
        <input type="text" value={empInfo.age} onChange={onAgeChange} />
        <button type="submit">save</button>
      </form>
      {isSaved && (
        <div>
          <h2>Saved Employee Information</h2>
          <h4>{savedData.name}</h4>
          <h4>{savedData.age}</h4>
        </div>
      )}
    </div>
  );
}

export default EmpForm;
