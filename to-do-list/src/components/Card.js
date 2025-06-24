import React from 'react';

function Card({ taskObj, index }) {

  // Dynamic color based on index (you can modify logic later)
  const colors = [
    { primaryColor: "#5D93E1" }, // Blue
    { primaryColor: "#F9D288" }, // Yellow
    { primaryColor: "#5DC250" }, // Green
    { primaryColor: "#F48687" }, // Red
    { primaryColor: "#B964F7" }  // Purple
  ];

  const currentColor = colors[index % colors.length];

  return (
    <div className="card-wrapper mr-5 mb-4">
      <div className="card-top" style={{ backgroundColor: currentColor.primaryColor }}></div>
      <div className="task-holder">
        <span className="card-header" style={{ backgroundColor: currentColor.primaryColor, borderRadius: "10px", padding: "5px 10px", color: "white" }}>
          {taskObj.Name}
        </span>
        <p className="mt-3">{taskObj.Description}</p>

        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i className="far fa-edit" style={{ color: currentColor.primaryColor, marginRight: "10px", cursor: "pointer" }}></i>
          <i className="fas fa-trash-alt" style={{ color: currentColor.primaryColor, cursor: "pointer" }}></i>
        </div>
      </div>
    </div>
  );
}

export default Card;
