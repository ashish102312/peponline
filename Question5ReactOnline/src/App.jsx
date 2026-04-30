import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-12 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-slate-800 mb-8">Basic Counter</h1>

        <div className="text-8xl font-black text-indigo-600 mb-12 tabular-nums"> {count}</div>
        <div className="flex gap-6">
          <button onClick={decrement} className="flex items-center justify-center w-16 h-16 bg-slate-100 hover:bg-red-100 text-slate-700 hover:text-red-600 rounded-2xl transition-all active:scale-95 text-2xl font-bold shadow-sm" title="Decrement">
            -
          </button>
          <button onClick={increment} className="flex items-center justify-center w-16 h-16 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl transition-all active:scale-95 shadow-lg shadow-indigo-200 text-2xl font-bold" title="Increment">
            +
          </button>
        </div>
        {count === 0 && (
          <p className="mt-8 text-slate-400 text-sm font-medium">
            Count cannot go below zero
          </p>
        )}
      </div>

      <footer className="mt-12 text-slate-500 font-medium italic">
        Task 2: Counter App Completed
      </footer>
    </div>
  );
}

export default App;
