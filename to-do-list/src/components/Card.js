import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Import clean icons from react-icons

function Card({ taskObj, index, deleteTask, updateTask }) {

  const colors = [
    { primaryColor: "#5D93E1" }, 
    { primaryColor: "#F9D288" }, 
    { primaryColor: "#5DC250" }, 
    { primaryColor: "#F48687" }, 
    { primaryColor: "#B964F7" }  
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

        <div style={{ position: "absolute", right: "20px", bottom: "20px", display: 'flex' }}>
          <FaEdit 
            style={{ color: currentColor.primaryColor, marginRight: "15px", cursor: "pointer", fontSize: "20px" }} 
            onClick={() => updateTask(index)}
          />
          <FaTrashAlt 
            style={{ color: currentColor.primaryColor, cursor: "pointer", fontSize: "20px" }} 
            onClick={() => deleteTask(index)}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
