import React, { useState } from 'react';

const TodoMain = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="main-content">
      <div className="todo-input-group">
        <input 
          type="text" 
          placeholder="Enter a new task..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="add-btn" onClick={addTask}>Add</button>
      </div>

      <ul className="todo-list">
        {tasks.map((task) => (
          <li key={task.id} className="todo-item">
            <span>{task.text}</span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
      {tasks.length === 0 && <p style={{textAlign: 'center', color: '#999'}}>No tasks yet!</p>}
    </div>
  );
};

export default TodoMain;
