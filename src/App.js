import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useState} from 'react';
import AddTaskForm from './components/AddTaskForm';
import UpdateForm from './components/UpdateForm';
import ToDo from './components/ToDo'

function App() {
  
  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([]);

  // Temp State
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  }

  // Delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter( task => task.id !== id)
    setToDo(newTasks);
  }

  // Mark task as done or completed
  const markDone = (id) => {
    let newTask = toDo.map( task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status})
      }
      return task;
    })
    setToDo(newTask);
  }


  // Cancel update
  const cancelUpdate = () => {
    setUpdateData('');

  }

  // Change task for update
  const changeTask = (e) => {
    // let newEntry = {
    //   id: updateData.id,
    //   title: e.target.value,
    //   status: updateData.status ? true : false
    // }

    setUpdateData({
      ...updateData,
      title: e.target.value
    });
  }

  // Update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id )
    let updateObject = [...filterRecords, updateData]
    setToDo(updateObject);
    setUpdateData('');
  }

  return (
    <div className="container App">
      <br /><br />
      <h2>Todo-List App (ReactJS)</h2>
      <br /><br />

      {/* Update Task */}
      {updateData && updateData ? (
        <UpdateForm 
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm 
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/* Display Todos */}

      {toDo && toDo.length ? '' : 'No Task...'}

      <ToDo 
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
