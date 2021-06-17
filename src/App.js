import { useState } from 'react';
import Header from './component/Header'
import Tasks from './component/Tasks'
import AddTask from './component/AddTask';
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shoping',
      day: 'Feb 6th at 1:30pm',
      reminder: false,
    }
  ]);
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => (task.id !== id)));

  }
  const toggleReminder = (id) => {
    setTasks(
      tasks.map(task => task.id === id ?
        { ...task, reminder: !task.reminder }
        : task)
    );
  }

  const addTask = (task) => {
    console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = ({ id, ...task });
    setTasks([...tasks, newTask])
  }
const toggleAddTask = ()=>{
  setShowAddTask(!showAddTask);
}
  return (
    <div className="container">
      <Header title={'Task Tracker'} showAdd={showAddTask} toggleAdd = {toggleAddTask} />
      {showAddTask?<AddTask onAdd={addTask} />
      : '' }
      {tasks.length > 0 ?
        <Tasks tasks={tasks}
          onToggle={toggleReminder}
          onDelete={deleteTask}
        /> : 'No Tasks to show'
      }
    </div>
  );
}

export default App;

