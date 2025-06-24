import React, { useState, memo, useEffect } from 'react';
import CreateTaskPopup from '../modals/CreateTask';
import Card from './Card';

const TodoList = memo(() => {
  const [modal, setModal] = useState(false); 
  const [tasklist, setTaskList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const toggle = () => {
    setModal(!modal);
  }

  const saveTask = (taskObj) => {
    let tempList = [...tasklist];
    if (editMode) {
      tempList[currentIndex] = taskObj; // update existing task
      setEditMode(false);
      setCurrentIndex(null);
    } else {
      tempList.push(taskObj);
    }
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  }

  const deleteTask = (index) => {
    let tempList = [...tasklist];
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
  }

  const updateTask = (index) => {
    setEditMode(true);
    setCurrentIndex(index);
    setModal(true);
  }

  return (
    <>
      <div className='header text-center'>
        <h3>Todo List</h3>
        <button className="btn btn-primary m-2" onClick={toggle}>
          Create Task
        </button>
      </div>

      <div className='task-container d-flex flex-wrap'>
        {tasklist.map((obj, index) => (
          <Card 
            taskObj={obj} 
            index={index} 
            key={index} 
            deleteTask={deleteTask} 
            updateTask={updateTask}
          />
        ))}
      </div>

      <CreateTaskPopup 
        toggle={toggle} 
        modal={modal} 
        save={saveTask} 
        editMode={editMode} 
        task={tasklist[currentIndex]}
      /> 
    </>
  );
});

export default TodoList;
