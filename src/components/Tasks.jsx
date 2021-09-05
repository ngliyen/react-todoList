import React from 'react';

const Tasks = (props) => {
  const {tasks} = props

  const changeHandler = (e, id) => {
    console.log("Changing status for index", id);
    props.updateStatus(id);
  }

  const deleteHandler = (e, id) => {
    props.deleteTask(id);
  }
  return(
    <div className="container w-50 mt-2">
      {tasks.map((task, index) => {
        return (
          <div className="d-flex justify-content-start gap-2 align-items-center mb-2">
            <p className={task.completed?"text-decoration-line-through col-8 mb-0 text-start":"col-8 mb-0 text-start"}>{task.name}</p>
            <input type="checkbox" key={index} checked={task.completed} onChange={(e) => changeHandler(e,task.id)}/>
            {console.log("I'm at index: ", index)}
            <button className="btn btn-dark" onClick={(e) => deleteHandler(e, task.id)}>Delete</button>
          </div>
        )
        })
      }
    </div>
  )
}

export default Tasks

