import { useState } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Toggle Visibility</h1>
        
        <button className="toggle-button" onClick={toggleVisibility}>
          {isVisible ? 'Hide Content' : 'Show Content'}
        </button>

        {isVisible && (
          <div className="content">
            <p>
             check if it work or not , if it work then it will show this content otherwise it will hide it
            </p>
          </div>
        )}
      </div>
      
      <footer>
        Task 5: Toggle Visibility Completed
      </footer>
    </div>
  );
}

export default App;
