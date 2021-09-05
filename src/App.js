import React, {useEffect, useState} from 'react';
import './App.css';
import Form from './components/Form';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  // https://blog.bitsrc.io/5-methods-to-persisting-state-between-page-reloads-in-react-8fc9abd3fa2f
  // useEffect(() => {
  //   setTasks(JSON.parse(window.localStorage.getItem('tasks')));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem('tasks', tasks);
  // }, [tasks]);

  
  useEffect(()=>{
    const taskList = localStorage.getItem('tasks-list');
    if(taskList){
      setTasks(JSON.parse(taskList));
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem('tasks-list',JSON.stringify(tasks))
  })

  const addNewTask = (task) => {
    task['id'] = tasks.length;
    setTasks([...tasks, task]);
  }

  const updateStatus = (id) => {
    const copy = JSON.parse(JSON.stringify(tasks));
    const index = copy.findIndex(task => task.id === id);
    copy[index].completed = !copy[index].completed
    setTasks(copy);
  }

  const deleteTask = (id) => {
    const copy = tasks.filter(task => task.id !== id);
    setTasks(copy);
  }

  return (
    <div className="App">
      <Form addNewTask={addNewTask} />
      <Tasks tasks={tasks} updateStatus={updateStatus} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
