
function Home(props){
    return(
        <div><h1>hello i am in Home Component</h1> 
        <AboutUs name={props.name}/>
        </div>
    )
}


function AboutUs(props){
    return(
        <div><h1>hello i am in AboutUs</h1>
        <ContactUs name={props.name}/>
         </div>
    )
}

function ContactUs(props){
    return(
        <div><h1>hello i am in ContactUs</h1>
        <h1> recieved props name={props.name}</h1>
         </div>
    )
}



function PropsDrilling(){
    return(
        <div>
            <h1>Props driling demo</h1>
            <Home name="sameer"/>
        </div>
    )
}

export default PropsDrilling