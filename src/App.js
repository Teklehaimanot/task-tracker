import { useState, useEffect } from 'react';
import Header from './component/Header'
import Tasks from './component/Tasks'
import AddTask from './component/AddTask';
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await featchTasks();
      setTasks(taskFromServer);

    }
    getTasks();
  }, [])
  const featchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }
  const featchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  
  }
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter(task => (task.id !== id)));

  }
  const toggleReminder = async (id) => {
    const taskToToggle = await featchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    console.log(updTask)

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }

  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(task)
    })
    const data = await res.json();
    setTasks([...tasks, data])
  }
  const toggleAddTask = () => {
    setShowAddTask(!showAddTask);
  }
  return (
    <div className="container">
      <Header title={'Task Tracker'} showAdd={showAddTask} toggleAdd={toggleAddTask} />
      {showAddTask ? <AddTask onAdd={addTask} />
        : ''}
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

