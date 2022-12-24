import { Greet } from "./Greet";
import User from "./components/User";
import Counter from "./components/Counter";
import CounterFunction from "./components/CounterFunction";
import Parent from "./components/Parent";
import EmployeePage from "./Pages/EmployeePage";
import UsersPage from "./Pages/UsersPage";
import CompanyPage from "./Pages/CompanyPage";
import Header from "./Pages/Header";
import EmployeeListPage from "./Pages/EmployeeList"
import {
  BorwserRouter,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import ParentLifeCycle from "./Lifecycle/ParentLifeCycle";
import UseStateDemo from "./Hooks/UseStateDemo";
import UseReducerDemoHook from "./Hooks/UseReducerHookDemo";
import UseEffectHookDemo from "./Hooks/UseEffectHookDemo";
import PropsDrilling from "./Hooks/PropsDrilling";
import UseContextHookDemo from "./Hooks/UseContextHookDemo";
import UseRefHookDemo from "./Hooks/UseRefHookDemo";
import EventHandling from "./components/EventHandling";
import ReduxCounter from "./components/ReduxCounter";
import EmployeeSearch from "./Pages/EmployeeSearch";
function App() {
  return (
    <div>
      {/* <Greet/>
    <Greet/> */}
      {/* <User/> */}
      {/* <Counter company="abc" mob="123454"/>
    <CounterFunction company="abc" mob="123445"/> */}

      {/* <Parent/> */}
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<EmployeePage />}></Route>
          <Route path="/users" element={<UsersPage />}></Route>
          <Route path="/company" element={<CompanyPage />}></Route>
          <Route path="/employeelist" element={<EmployeeListPage/>}></Route>
          <Route path="/lifecycle" element={<ParentLifeCycle/>}></Route>
          <Route path="/employeesearch" element={<EmployeeSearch/>}></Route>
          
        </Routes>
      </BrowserRouter>
      {/* <UseStateDemo/>
      <UseReducerDemoHook/>
      <UseEffectHookDemo/> */}
      {/* <PropsDrilling/> */}
      {/* <UseContextHookDemo/> */}
      {/* <UseRefHookDemo/> */}
      {/* <EventHandling/> */}

      {/* <ReduxCounter/> */}
    </div>
  );
}

export default App;
