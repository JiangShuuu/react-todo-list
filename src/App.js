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
    //
  }

  // Delete task
  const deleteTask = (id) => {
    //
  }

  // Mark task as done or completed
  const markDone = (id) => {
    //
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

      {/* Display Todos */}

      {toDo && toDo.length ? '' : 'No Task...'}

      {toDo && toDo.map( (task, index) => {
        return(
          <React.Fragment key={task.id}>
            <div className='col taskBg'>
              <div className={task.status ? 'done' : ''}>
                <span className="taskNumber">{index + 1}</span>
                <span className="taskText">{task.title}</span>
              </div>
            </div>
          </React.Fragment>
        )})
      }
    </div>
  );
}

export default App;
