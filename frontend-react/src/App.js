import User from './User'
import Header from './Header'
import Employee from './Employee';
import EmployeeWithFunction from './EmployeeWithFunction';
import Company  from './Company';

function App() {
  return (
    <div className="App">

      <h1>My first react app </h1>
      {/* <User name="sameer" type="text"/> */}
      {/* <Header/>
      <Employee/>
 */}
       <EmployeeWithFunction company="carrerx"/>
      <Company company="carrerx"/>
    </div>
  );
}

export default App;

