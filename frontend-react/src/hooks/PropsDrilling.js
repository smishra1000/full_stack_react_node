function Home(props){
    return(
        <div>
            <h4>Home component</h4>
            <AboutUs address={props.address}/> 
        </div>
    )
}

function AboutUs(props){
    return(
        <div>About us component
            <ContactUs address={props.address}/> 
        </div>
    ) 
}


function ContactUs(props){
    return(
        <div>ContactUs us component My addres: {props.address}</div>
    ) 
}

function MenuItem(){
    return(
        <Home address="hyd"/>
    )
}

export default MenuItem
