import React, { useState, memo, useEffect } from 'react';
import CreateTaskPopup from '../modals/CreateTask';
import Card from './Card';

const TodoList = memo(() => {
  const [modal, setModal] = useState(false); 
  const [tasklist, setTaskList] = useState([]);

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
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
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
          <Card taskObj={obj} index={index} key={index} />
        ))}
      </div>

      <CreateTaskPopup toggle={toggle} modal={modal} save={saveTask} /> 
    </>
  );
});

export default TodoList;
