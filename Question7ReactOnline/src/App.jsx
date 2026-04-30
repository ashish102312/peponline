import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(inputValue);
    setInputValue(''); // Clear input after submit
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-sm p-8 border border-gray-200 rounded-lg shadow-sm">
        <h1 className="text-xl font-semibold mb-6 text-gray-800">Simple Form Handling</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Enter your name
            </label>
            <input
              id="name"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. Ashish"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Submit
          </button>
        </form>

        {submittedName && (
          <div className="mt-8 pt-6 border-t border-gray-100 animate-in fade-in slide-in-from-top-1 duration-500">
            <p className="text-sm text-gray-500 mb-1">Last submitted name:</p>
            <p className="text-2xl font-bold text-blue-600">{submittedName}</p>
          </div>
        )}
      </div>
      
      <footer className="mt-12 text-gray-400 text-sm italic">
        Task 4: Simple Form Handling Completed
      </footer>
    </div>
  );
}

export default App;
