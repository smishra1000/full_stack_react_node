import {useEffect,useState} from "react";
function UseEffectHook(){
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [post,setPost] = useState({id:"",title:"",userId:"",completed:""})


    useEffect(() => {
        console.log("hello i am usEffect")
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        //     .then(function(res){
        //     console.log("api called successfully got the data")
        //     console.log(res);
        //     return res.json()
        // }).then(function(res){
        //     console.log(res);
        //     setPost((prevState)=>({
        //         ...prevState,
        //         id:res.id,
        //         title:res.title,
        //         userId:res.userId,
        //         completed:res.completed
        //     }))
        // })
    },[name,age]);

    const changeName = ()=>{
        setName("sameer")
        
    }
    const changeAge = ()=>{
        setAge(30)
    }
      
    return(
        <div>
            <h1>Demo of Use effect hook</h1>
            <h1>{name}</h1>
            <button onClick={changeName}>Change Name</button>
            <button onClick={changeAge}>Change Age</button>
            {/* <table className="table table-primary">
                <thead>
                    <tr>
                        <th>
        id
                        </th>
                        <th>
                            userid
                        </th>
                        <th>
                            title
                        </th>
                        <th>
                           completed 
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {post.id}
                        </td>
                        <td>
                            {post.userId}
                            </td>
                            <td>
                            {post.title}
                            </td>
                            <td>
                            {post.completed ? "true" : "false"}
                            </td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    )
}

export default UseEffectHook