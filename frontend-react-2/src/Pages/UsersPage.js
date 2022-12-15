import {useEffect, useEffectHook,useState} from "react";

function UsersPage(){
    const [users,setUsers] = useState([])


    useEffect(()=>{
        fetch("http://localhost:5000/users").then(function(res){
            return res.json()
        }).then(function(result){
            console.log(result);
            setUsers((prev)=>[...prev,...result])

        })
    },[])

    return(
        <div>

            <h1>I am is users Page</h1>
            <ul>
                {users.map((user,index)=>{
                    return(
                        <li>Name: {user.name} Age {user.age}  Id {user.id}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default UsersPage