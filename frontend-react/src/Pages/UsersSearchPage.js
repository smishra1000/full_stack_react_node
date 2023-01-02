import { useEffect, useState } from "react";
var usersdata = [
  {
    id: 1,
    name: "Madhavi",
  },
  {
    id: 2,
    name: "Chandralekha",
  },
  {
    id: 3,
    name: "BhanuChandar",
  },
  {
    id: 4,
    name: "Nikhil",
  },
  {
    id: 5,
    name: "Vinay",
  },
  {
    id: 6,
    name: "Vinod",
  },
];
function UsersSearchPage() {
  const [users, setUsers] = useState(usersdata);

  const [searchKey,setSearchKey] = useState("");
  const [name,setName] = useState("");
  const [id,setId] = useState("")


  const searchUser = (e)=>{
    setSearchKey(e.target.value)
    if(e.target.value!==""){
        const filteredUsers = users.filter((user)=>{
            return user.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setUsers(filteredUsers)
    }else {
        setUsers(usersdata)
    }
   
  }

  const onIdChange = (e)=>{
    setId(e.target.value)
  }

  const onNameChange = (e)=>{
    setName(e.target.value)
  }
  const adduser = ()=>{
    let user = {
        id,
        name
    }
    setUsers((prev)=>[...prev,user])
    setId("")
    setName("")
  }

  const filterUsers=()=>{
    if(searchKey!==""){
        const filteredUsers = users.filter((user)=>{
            return user.name.toLowerCase().includes(searchKey.toLowerCase())
        })
        setUsers(filteredUsers)
    }else {
        setUsers(usersdata)
    }
  }

  const deleteUser = (data)=>{
    const filteredUsers = users.filter((user)=>{
        return user.id !==data.id
    })
    setUsers(filteredUsers)
  }
  return (
    <div className="container">
      <h1>From users Search component</h1>
      <div className="row">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search User"
            value={searchKey}
            onChange={(e)=>searchUser(e)}
          />
          <span
            className="input-group-text"
            style={{ background: "green", color: "#fff" }}
            id="basic-addon2"
            onClick={filterUsers}
          >
            Search
          </span>
        </div>
      </div>
      <div className="row">
        {users.length===0 && <h1>No result found</h1>}
        <ul style={{ listStyle: "none" }}>
          {users.map((user) => {
            return (
              <li key={user.id}>
                <span>
                  {user.id} {user.name}
                </span>
                <span style={{marginLeft:"30px",fontSize:"20px",fontWeight:"600"}} onClick={()=>deleteUser(user)}>x</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="row">
      <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="enter id"
            value={id}
            onChange={(e)=>onIdChange(e)}
          />
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="enter name"
            value={name}
            onChange={(e)=>onNameChange(e)}
          />
        </div>
        <button className="btn btn-primary" onClick={adduser}>Add User</button>
      </div>
    </div>
  );
}

export default UsersSearchPage;
