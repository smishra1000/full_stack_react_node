import {useEffect,useState} from "react";
function UseEffectHookDemo(){
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [post,setPost] = useState({id:"",title:"",userId:"",completed:""})

    async function getPost(){
        let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let post = await data.json();
        setPost(post)
    }

    useEffect(() => {
        console.log("hello i am usEffect")
        getPost();
    },[name,age]);

    const changeName = ()=>{
        setName("sameer")// ""----  "sameer"---"sameer"
        
    }
    const changeAge = ()=>{
        setAge(30)
    }

    const handleAge = (e)=>{
        setAge(e.target.value)
    }
      
    return(
        <div>
            <h1>Demo of Use effect hook</h1>
            <h1>{name}</h1>
            <h1>Age : {age}</h1>
            <input type="text" placeholder="enter different age" value={age} onChange={(e)=>handleAge(e)}/>
            <button onClick={changeName}>Change Name</button>
            {/* <button onClick={changeAge}>Change Age</button> */}
            <table className="table table-primary">
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
            </table>
        </div>
    )
}

export default UseEffectHookDemo




// useEffect(()=>{

// }) ------it will call on every render


// useEffect(()=>{
    
// },[])----it will call on very first render and stop  



// useEffect(()=>{
    
// },[age,name,count])---
//     it will get called on very first render as well as
//  whenever we chnage then dependent value