function EmployeeListPage(){
    let data = localStorage.getItem("employeeInfo")
    let employee = ""
    if(data){
        employee = JSON.parse(data)
    }
    return(
        <div>
            <h1>Employee data</h1>
            <h1>employee Name {employee.name} Age: {employee.age}</h1>

        </div>
    )

}

export default EmployeeListPage