import {useState,useEffect} from "react"
function EffectHookDemo(){
    const [count,setCount] = useState(0)

    const [count2,setCount2] = useState(0)
    const [user,setUser] = useState({name:"",id:"",age:""})

    function increment(){
        setCount(count+1)
    }
    function increment2(){
        setCount2(count2+1)
    }

    useEffect(()=>{

        console.log("hello i am calling")
    },[count,count2])

    useEffect(()=>{
        fetch("http://localhost:5000/user").then(function(res){
            return res.json()
        }).then(function(data){
            console.log("hello data recieved from node server",data)
            setUser((prevState)=>({
                ...prevState,
                ...data
            }))
        })
    },[])

    return(
        <div>
           
            <h1>2nd hook useEffect hook demo </h1>
            <h1>count1:{count} count2 {count2}</h1>
            <button onClick={()=>increment()}>Increment</button>
            <button onClick={()=>increment2()}>Increment2</button>
            <h1>User Info: Name {user.name} Age: {user.age} Id: {user.id}</h1>
        </div>
    )
}

export default EffectHookDemo