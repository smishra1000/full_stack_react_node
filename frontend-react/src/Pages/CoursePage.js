import { useState } from "react";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom"
const initialState = {
  courseName: "",
  instructorName: "",
  startDate: "",
  endDate: "",
  schedule: "",
};

function CoursePage() {
  const [course, setCourse] = useState(initialState);
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const createCourse = () => {
    console.log("course data=", course);
    dispatch({type:"ADD_COURSE",payload:course})
    navigate("/courselist")
  };

  const handleCourseDataChange = (e) => {
    setCourse((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="container">
      <div className="mb-3">
        <label className="form-label">Course Name</label>
        <input
          type="email"
          className="form-control"
          placeholder="enter course name"
          name="courseName"
          value={course.courseName}
          onChange={(e) => handleCourseDataChange(e)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Instructor Name</label>
        <input
          type="email"
          className="form-control"
          placeholder="enter course name"
          name="instructorName"
          value={course.instructorName}
          onChange={(e) => handleCourseDataChange(e)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Start Date</label>
        <input
          type="email"
          className="form-control"
          placeholder="enter course name"
          name="startDate"
          value={course.startDate}
          onChange={(e) => handleCourseDataChange(e)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">End date</label>
        <input
          type="email"
          className="form-control"
          placeholder="enter course name"
          name="endDate"
          value={course.endDate}
          onChange={(e) => handleCourseDataChange(e)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Schdule</label>
        <input
          type="email"
          className="form-control"
          placeholder="enter course name"
          name="schedule"
          value={course.schedule}
          onChange={(e) => handleCourseDataChange(e)}
        />
      </div>
      <button
        onClick={() => {
          createCourse();
        }}
        className="btn btn-success"
      >
        Create
      </button>
    </div>
  );
}

export default CoursePage;
