import { Task } from '@domain/models/Task';
import React from 'react';
import './App.css';
import { TaskList } from './UI/TaskList';

function App() {

  const handleSelectedTaskShow = (task: Task) => {
    alert(task);
  }

  return (
    <div className="App">
      <TaskList onSelectTask={handleSelectedTaskShow} />
    </div>
  );
}

export default App;
