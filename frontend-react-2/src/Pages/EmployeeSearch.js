import { useState,useEffect } from "react";

function EmployeeSearch() {
    const [users,setUsers] = useState([]);
    const [searchKey,setSearchKey] = useState("");
    // const [user,setUser] = useState({})

    useEffect(()=>{
        fetch("http://localhost:5000/user").then(function(res){
            return res.json()
        }).then(function(data){
            setUsers(data)
        })
    },[])



    const searchUsers = (e)=>{
        setSearchKey(e.target.value)
        let filteredUsers = []
        if(e.target.value!=="") {
            const filteredUsers = users.filter((user)=>{
                return user.name.toLowerCase().includes(searchKey.toLowerCase())
            })

            setUsers(filteredUsers)
        }else {
            setUsers(users)
        }
       
    }
  return (
    <div className="conatiner">
            <div style={{marginTop:'30px',textAlign:'center',width:'300px',padding:'10px'}}>
                <input type="text" value={searchKey} onChange={searchUsers} placeholder="search people"/>
            </div>
            <ul>
             {users.length===0 && <h1>No People Found</h1>}   
            {users.map((item)=>{
                return(
                <li style={{display:'flex',justifyContent: 'space-around'}}>
                    <span>
                    <i className="fa fa-user" aria-hidden="true"></i>
                    </span>
                    <span>
                        {item.name}
                    </span>
                    <span>
                    <i className="fa fa-microphone" aria-hidden="true"></i>
                    </span>
                    <span>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    </span>
                </li>)})}
            </ul>

    </div>
  );
}

export default EmployeeSearch;
