import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from 'react';

function App() {
  
  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([
    {"id": 1, "title": "Task 1", "status": true},
    {"id": 2, "title": "Task 2", "status": false}
  ]);

  // Temp State
  const [newTask, setNewTask] = useState('');
  const [updateDate, setUpdateData] = useState('');

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
    console.log(id)
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
    //
  }

  // Chanfe task for update
  const changeTask = (e) => {
    //
  }

  // Update task
  const updateTask = () => {
    //
  }

  return (
    <div className="container App">
      <br /><br />
      <h2>Todo-List App (ReactJS)</h2>
      <br /><br />

      {/* Update Task */}
      <div className='row mb-3'>
        <div className='col'>
          <input className='form-control form-control-lg' />
        </div>
        <div className='col-auto'>
          <button className='btn btn-lg btn-success mr-20'>Update</button>
          <button className='btn btn-lg btn-warning'>Cancel</button>
        </div>
      </div>


      {/* Add Task */}
      <div className='row mb-3'>
        <div className='col'>
          <input
            value={newTask}
            onChange={ (e) => setNewTask(e.target.value)}  
            className="form-control form-control-lg" />
        </div>
        <div className='col-auto'>
          <button
            onClick={addTask} 
            className='btn btn-lg btn-success'>Add Task</button>
        </div>
      </div>

      {/* Display Todos */}

      {toDo && toDo.length ? '' : 'No Task...'}

      {toDo && toDo
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map( (task, index) => {
          return(
            <React.Fragment key={task.id}>
              <div className='col taskBg'>
                <div className={task.status ? 'done' : ''}>
                  <span className="taskNumber">{index + 1}</span>
                  <span className="taskText">{task.title}</span>
                </div>
                <div className='iconsWrap'>
                  <span
                    onClick={(e) => markDone(task.id)} 
                    title="Completed / Not Compelted">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                  { task.status ? null : (
                    <span title="Edit">
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  )}
                  
                  <span 
                    onClick={() => deleteTask(task.id)}
                    title="Delete">
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </React.Fragment>
          )})
      }
    </div>
  );
}

export default App;
