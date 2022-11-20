function User(props){
    return(
        <div>
            <h1>Hello from user component {props.name}</h1>
            <p>type of element need to create is{props.type}</p>
        </div>
    )
}

export default User