import {BrowserRouter,Routes,Route} from "react-router-dom";

import EmployeePage from "./Pages/EmployeePage";
import StudentPage from "./Pages/StudentPage";
import CoursePage from "./Pages/CoursePage";
import Header from "./Pages/Header";
import StudentList from "./Pages/StudentList";

function MainApp() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/course" element={<CoursePage/>}></Route>
          <Route path="/student" element={<StudentPage/>}></Route>
          <Route path="/" element={<EmployeePage/>}></Route>
          <Route path="/employee" element={<EmployeePage/>}></Route>
          <Route path="/studentlist" element={<StudentList/>}></Route>
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default MainApp;

