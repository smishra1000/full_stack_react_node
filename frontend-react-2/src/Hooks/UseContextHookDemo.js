import React, {useContext} from "react"


const userInfo = {
    name:"sameer",
    age:20,
    salary:2000,
    address:"hyd"
}

const UserContext = React.createContext(userInfo)

function Home(){
    return(
        <div><h1>hello i am in Home Component</h1> 
        <AboutUs />
        </div>
    )
}


function AboutUs(){
    const user = useContext(UserContext)
    return(
        <div><h1>hello i am in AboutUs
            <h1>Name: {user.name}</h1>
        </h1>
        <ContactUs/>
         </div>
    )
}

function ContactUs(){
    const user = useContext(UserContext)
    return(
        <div><h1>hello i am in ContactUs</h1>
        <h1> recieved context name= {user.name}</h1>
        <h1>Age: {user.age}</h1>
        <h1>Salary: {user.salary}</h1>
        <h1>Address : {user.address}</h1>
         </div>
    )
}



function UseContextHookDemo(){
    return(
        <div>
            <h1>Props driling demo</h1>
            <UserContext.Provider value={userInfo}>
            <Home/>
            </UserContext.Provider>
            
        </div>
    )
}

export default UseContextHookDemo