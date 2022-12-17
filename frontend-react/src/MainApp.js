import {BrowserRouter,Routes,Route} from "react-router-dom";

import EmployeePage from "./Pages/EmployeePage";
import StudentPage from "./Pages/StudentPage";
import CoursePage from "./Pages/CoursePage";
import Header from "./Pages/Header";
import StudentList from "./Pages/StudentList";
import CourseList from "./Pages/CourseListPage";
import ClassBasedComponent from "./react-recap/ClassBasedComponent";
import FunctionBasedComponent from "./react-recap/FunctionBasedComponent";
import StateHook from "./react-recap/recap-hooks/StateHook";
import EffectHookDemo from "./react-recap/recap-hooks/EffectHook";
import UseReducerRecap from "./hooks/UseReducerRecap";
import UserPage from "./Pages/UserPage";
import Article from "./components/Article";
import Employee from "./Employee";
import EmpForm from "./components/functionalcomponents/EmpForm";

function MainApp() {
  return (
    <div className="App">
      {/* <ClassBasedComponent/>
      <FunctionBasedComponent/> */}
      {/* <StateHook/>
      <EffectHookDemo/> */}
      {/* <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/course" element={<CoursePage/>}></Route>
          <Route path="/student" element={<StudentPage/>}></Route>
          <Route path="/" element={<EmployeePage/>}></Route>
          <Route path="/employee" element={<EmployeePage/>}></Route>
          <Route path="/studentlist" element={<StudentList/>}></Route>
          <Route path="/courseList" element={<CourseList/>}></Route>
          <Route path="/users" element={<UserPage/>}></Route>
        </Routes>
      </BrowserRouter> */}
      {/* <Article/> */}
      {/* <Employee/> */}
      <EmpForm/>
      {/* <UseReducerRecap/> */}
        
    </div>
  );
}

export default MainApp;

