import React from 'react'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) =>{
    return (
        <>
        {
            tasks.map((task)=> (
               <Task task= {task} key = {task.id}  onToggle= {onToggle} onDelete = {onDelete}/>
            )     
            )
        }
        </>
    )
}

export default Tasks
