import {useState,useEffect} from "react"
function StudentList(){
    const [students,setStudents] = useState([])
    useEffect(()=>{
        let students = localStorage.getItem("students")
        if(students){
            let studentData = JSON.parse(students)
            setStudents(oldArray => [...oldArray, ...studentData]);
        }
    },[])
    return(
        <div className="container">
            <h1>I am in student list page</h1>
            <div>
                <ul>
                {students.map((student,index)=>{
                    return(
                        <li key={index}>{student.name} {student.age}</li>
                    )
                })}
                        
                </ul>
            </div>
        </div>
    )
}

export default StudentList