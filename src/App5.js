import React, { useState } from "react";
import "./style.css"; // Assuming you have your Bootstrap CSS included
import "bootstrap/dist/css/bootstrap.min.css";

const courseColors = {
  Math: "yellow",
  "Science Tech": "blue",
  History: "green",
  English: "purple",
  Vision: "orange",
  "Eth. cult. rel": "pink",
  Spanish: "red",
  German: "chartreuse",
  French: "teal",
  "Ed. phys.": "indigo",
  Arts: "gray",
  Break: "aqua",
  Lunch: "beige",
};

const courseTeachers = {
  Math: "Deichman A.",
  "Science Tech": "Quesnel A.",
  French: "Hodkin A.",
  German: "Jentsch-M K.",
  History: "Isabel O.",
  Vision: "Cotton P. L.",
  "Eth. cult. rel": "Lim P.",
  English: "Button M.",
  "Ed. phys.": "Gauthier S.",
  Spanish: "Dotto J.",
  Arts: "Cotton P.L.",
};

const schedule = {
  Monday: [
    ["8:15 - 9:00", "Math"],
    ["9:05 - 9:50", "Math"],
    ["9:55 - 10:40", "Eth. cult. rel"],
    ["10:40 - 11:05", "Break"],
    ["11:05 - 11:50", "French"],
    ["11:55 - 12:40", "Science Tech"],
    ["12:40 - 13:35", "Lunch"],
    ["13:35 - 14:20", "Science Tech"],
    ["14:25 - 15:10", "Science Tech"],
    ["15:15 - 16:00", "German"],
    ["16:05 - 16:50", ""],
  ],
  Tuesday: [
    ["8:15 - 9:00", "French"],
    ["9:05 - 9:50", "French"],
    ["9:55 - 10:40", "French"],
    ["10:40 - 11:05", "Break"],
    ["11:05 - 11:50", "Math"],
    ["11:55 - 12:40", "Math"],
    ["12:40 - 13:35", "Lunch"],
    ["13:35 - 14:20", "Science Tech"],
    ["14:25 - 15:10", "History"],
    ["15:15 - 16:00", "History"],
    ["16:05 - 16:50", ""],
  ],
  Wednesday: [
    ["8:15 - 9:00", "History"],
    ["9:05 - 9:50", "History"],
    ["9:55 - 10:40", "Vision"],
    ["10:40 - 11:05", "Break"],
    ["11:05 - 11:50", "French"],
    ["11:55 - 12:40", "Science Tech"],
    ["12:40 - 13:35", "Lunch"],
    ["13:35 - 14:20", "Science Tech"],
    ["14:25 - 15:10", "Science Tech"],
    ["15:15 - 16:00", "Eth. cult. rel"],
    ["16:05 - 16:50", ""],
  ],
  Thursday: [
    ["8:15 - 9:00", "French"],
    ["9:05 - 9:50", "French"],
    ["9:55 - 10:40", "Spanish"],
    ["10:40 - 11:05", "Break"],
    ["11:05 - 11:50", "Ed. phys."],
    ["11:55 - 12:40", "Ed. phys."],
    ["12:40 - 13:35", "Lunch"],
    ["13:35 - 14:20", "English"],
    ["14:25 - 15:10", "English"],
    ["15:15 - 16:00", "English"],
    ["16:05 - 16:50", ""],
  ],
  Friday: [
    ["8:15 - 9:00", "Science Tech"],
    ["9:05 - 9:50", "Arts"],
    ["9:55 - 10:40", "Arts"],
    ["10:40 - 11:05", "Break"],
    ["11:05 - 11:50", "Spanish"],
    ["11:55 - 12:40", "Spanish"],
    ["12:40 - 13:35", "Lunch"],
    ["13:35 - 14:20", "Math"],
    ["14:25 - 15:10", "Math"],
    ["15:15 - 16:00", ""],
    ["16:05 - 16:50", ""],
  ],
};

const App = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleDayClick = (day) => {
    console.log("selected day ", day);
    setSelectedDay(day);
    setSelectedCourse("");
  };

  console.log("selected day state", selectedDay);

  const handleCourseClick = (courseName) => {
    setSelectedCourse(courseName);
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1>VSM</h1>
        <p>{currentDate}</p>
      </div>
      <div className="row">
        {/* <div className="col-md-12">
          <table
            className={`table table-bordered${
              selectedDay ? " d-none d-md-table" : ""
            }`}
          >
            <thead>
              <tr>
                <th className="bg-secondary">Time</th>
                <th className="bg-secondary">Monday</th>
                <th className="bg-secondary">Tuesday</th>
                <th className="bg-secondary">Wednesday</th>
                <th className="bg-secondary">Thursday</th>
                <th className="bg-secondary">Friday</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(schedule).map((day) =>
                schedule[day].map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="bg-secondary">{row[0]}</td>
                    {row.slice(1).map((course, columnIndex) => (
                      <td
                        key={columnIndex}
                        style={{
                          backgroundColor: courseColors[course],
                          color: "white",
                        }}
                        onClick={() =>
                          handleCourseClick(`${course} - ${teachers[rowIndex]}`)
                        }
                      >
                        {selectedCourse ===
                          `${course} - ${teachers[rowIndex]}` && (
                          <div className="teacher-name">
                            {teachers[rowIndex]}
                          </div>
                        )}
                        {course}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div> */}
        <div className="col-12">
          {/* For small devices */}
          <div
            className={`day-buttons text-center${
              selectedDay ? " d-md-none" : ""
            }`}
          >
            <h4>Select a day:</h4>
            <div className="btn-group-horizontal">
              {Object.keys(schedule).map((day) => (
                <button
                  key={day}
                  className={`btn btn-secondary font-weight-bold ${
                    selectedDay === day ? "btn-selected" : ""
                  }`}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
          {selectedDay && (
            <table
              className={`table table-bordered${
                selectedDay ? " d-md-table" : " d-none"
              }`}
            >
              <thead>
                <tr>
                  <th className="bg-secondary time-column">Time</th>
                  <th className="bg-secondary">Courses</th>
                </tr>
              </thead>
              <tbody>
                {schedule[selectedDay].map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td className="bg-secondary time-column">{row[0]}</td>
                    <td
                      style={{
                        backgroundColor:
                          courseColors[schedule[selectedDay][rowIndex][1]],
                        color: "black",
                      }}
                      onClick={() =>
                        handleCourseClick(
                          `${schedule[selectedDay][rowIndex][1]} - ${
                            courseTeachers[schedule[selectedDay][rowIndex][1]]
                          }`
                        )
                      }
                      className="font-weight-bold"
                    >
                      {selectedCourse ===
                        `${schedule[selectedDay][rowIndex][1]} - ${
                          courseTeachers[schedule[selectedDay][rowIndex][1]]
                        }` && (
                        <div className="teacher-name">
                          {courseTeachers[schedule[selectedDay][rowIndex][1]]}
                        </div>
                      )}
                      {schedule[selectedDay][rowIndex][1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
