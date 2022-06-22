import React, { useState, useEffect } from "react";
import TutorDetails from "../TutorDetails/TutorDetails";
import "./DashboardDisplay.css";

function DashboardDisplay() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/tutorget")
      .then((res) => res.json())
      .then(
        (data) => setData(data.tutors)
        // console.log(data.tutors[0].tutorName)
      );
  }, []);

  //changes dictionary to list
  var dataMap = Array.from(data);
  console.log(dataMap);
  return (
    <div className="dashdiv">
      {dataMap.map((dataMap) => {
        return (
          <TutorDetails
            name={dataMap.tutorName}
            subject={dataMap.tutorSubject}
          />
        );
      })}
    </div>
  );
}

export default DashboardDisplay;
