import React, {useState} from 'react';

const Form = (props) => {
  const [task, setTask] = useState({
    name: "",
    completed: false
  });

  const changeHandler = (e) => {
    const {name, value} = e.target;
    
    // update form input to state
    setTask({
      ...task, // make a copy of previous state
      [name]:value // replace the value of the key with new value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Task: ", task);
    props.addNewTask(task);
    setTask({
      ...task,
      ['name']:""
    })
  }

  return (
    <div className="container w-50 mt-5">
      <form onSubmit={submitHandler}>
        <div className = "d-flex justify-content-start gap-2">
          {/* <label htmlFor="name" className="form-label col-2 text-start">Color </label> */}
          <input className="form-control w-50" onChange={changeHandler} type="text" name="name" value={task.name}/>
        </div>
        <div className = "d-flex justify-content-start mt-2">
          <button type = "submit" className = "btn btn-light">Add</button>
        </div>
      </form>
    </div>
  )
}

export default Form;