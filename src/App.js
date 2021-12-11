import React from 'react';
import { useState} from 'react'
import Header from './components/Header.js'
import Tasks from './components/Tasks.js'


const App=() =>{
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Doctors Appointment',
        day: 'Feb 5th at 2:30',
        reminder: true,
    },
    {
        id:2,
        text:'Meeting at Work',
        day: 'Feb 6th at 4:30',
        reminder: true,
    },
    {
        id:3,
        text:'grocery shopping',
        day: 'Feb 8th at 2:30',
        reminder: false,
    },
])

  
  return (
    <div className="container">
    <Header />
    <Tasks  tasks={tasks}/>
    </div>

  );
  }



  export default App