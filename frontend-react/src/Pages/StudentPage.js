import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function StudentPage() {
    
const navigation = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [students,setStudents] = useState([])

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
    setStudents(oldArray => [...oldArray, student]);
    let st = localStorage.getItem("students")
    let stnew = []
    if(st){
      let stnew = JSON.parse(st);
      stnew = [...stnew,student]
      localStorage.setItem("students",JSON.stringify(stnew))
    }else {
      stnew.push(student)
       localStorage.setItem("students",JSON.stringify(stnew))
    }
    navigation("/studentlist")
  }
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
