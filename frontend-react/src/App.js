// import User from './User'
import Header from './Header'
import Employee from './Employee';
import EmployeeWithFunction from './EmployeeWithFunction';
import Company  from './Company';
import User from './components/User'
import Article from './components/Article';
import Counter from './components/Counter';
import Parent from './components/Parent';
import ParentData from './components/ParentData';
import CounterF from './components/functionalcomponents/CounterF';
import EmpForm from './components/functionalcomponents/EmpForm'
import AllHook from './hooks/AllHook';
// import sayHello, {add as sum} from './ModuleDemo'

function App() {
  // console.log(sayHello());
  // console.log(sum())
  // let msg = "hello good morning"
  // let result = `hi ${msg}`
  // console.log(result);

  // let user = {
  //   name:"sameer",
  //   age:21
  // }

  // let {name,age} = user;
  // console.log(state,city,pin)

  // const ages = [20,50];
  // console.log(ages[0]);
  // console.log(ages[1]);
  // const [first,second] = ages;
  // console.log(first,second)


  //... /rest and spread 
// ... as spread
// function add(a,b,c)
// {
//   console.log(a+b+c)
// }

// let numbers = [1,2,3]

// add(...numbers)///add(1,2,3)  spreding

// let [a,b,c] = [...numbers]
// console.log(a,b,c)

// var array1 = [2,3,4,5,6];
// var array2 = [7,8,9,10];

// var result = [...array1,...array2]//[2,3,4,5,6,7,8,9,10]

// console.log(result);


//... as rest

// function showRest(a,b,...c){
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// showRest(2,3,4,5,6,7)

  return (
    <div className="App">
      {/* <User name="sameer" type="text"/> */}
      {/* <Header/>
      <Employee/>
 */}
       {/* <EmployeeWithFunction company="carrerx"/>
      <Company company="carrerx"/> */}
      {/* <Employee company="carrerx" scores={scores} add={add}/> */}

      {/* <User/> */}
      {/* <Article/> */}
      {/* <Counter/> */}
      {/* <Parent/> */}
      {/* <CounterF name="sameer"/> */}
      {/* <EmpForm/> */}
      {/* <AllHook/> */}
    </div>
  );
}

export default App;

