import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function StudentPage() {
    
const navigation = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [students,setStudents] = useState([])
  const [isSaved,setIsSaved] = useState(false)

  const handleNameChange = (e)=>{
    setName(e.target.value)
  }
  const handleAgeChange = (e)=>{
    setAge(e.target.value)
  }
  const submit = (e)=>{
    let student = {
        name:name,
        age:age
    }
    setStudents(prevState => [...prevState, student]);
    setIsSaved(true)
  }

  useEffect(() => {
    const json = localStorage.getItem("students");
    const savedStudents = JSON.parse(json);
    if (savedStudents) {
      setStudents(savedStudents);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(students);
    localStorage.setItem("students", json);
  }, [students]);

  useEffect(()=>{
    if(isSaved) {
      navigation("/studentList")
    }
  },[isSaved])

  return (
    <div>
        <div className="container">
        <div class="mb-3">
        <label  class="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          placeholder="enter name"
          value={name}
          onChange={(e)=>handleNameChange(e)}
        />
      </div>
      <div class="mb-3">
        <label class="form-label">
          Age
        </label>
        <input
          type="text"
          class="form-control"
          placeholder="enter age"
          value={age}
          onChange={(e)=>handleAgeChange(e)}
        />
      </div>
      <button className="btn btn-success" onClick={submit}>Save</button>
      <h1>Hello i am in Student page</h1>
        </div>
   
    </div>
  );
}

export default StudentPage;
