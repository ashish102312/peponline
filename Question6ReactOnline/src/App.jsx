function App() {
  const tasks = [
    { id: 1, title: "Complete React Tutorial", priority: "High" },
    { id: 2, title: "Build a Profile Card", priority: "Medium" },
    { id: 3, title: "Design Counter App", priority: "High" },
    { id: 4, title: "Practice List Rendering", priority: "Low" },
    { id: 5, title: "Push to GitHub", priority: "Medium" }
  ];

  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center py-12 px-6">
      <div className="max-w-md w-full">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-black text-rose-900 mb-2">Dynamic Task List</h1>
          <p className="text-rose-600 font-medium italic">Mastering List Rendering & Keys</p>
        </header>

        <ul className="space-y-4">
          {tasks.map((task, index) => (
            <li 
              key={task.id} 
              className="bg-white p-5 rounded-2xl shadow-sm border border-rose-100 flex items-center justify-between group hover:shadow-md hover:border-rose-300 transition-all"
            >
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-600 font-bold text-xs">
                  {index + 1}
                </span>
                <span className="text-slate-800 font-semibold group-hover:text-rose-700 transition-colors">
                  {task.title}
                </span>
              </div>
              
              <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md border ${
                task.priority === 'High' ? 'bg-red-50 text-red-600 border-red-100' : 
                task.priority === 'Medium' ? 'bg-amber-50 text-amber-600 border-amber-100' : 
                'bg-emerald-50 text-emerald-600 border-emerald-100'
              }`}>
                {task.priority}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-12 p-6 bg-white/50 rounded-3xl border border-rose-200/50 text-center">
          <p className="text-rose-800 text-sm font-medium">
            💡 Total Tasks: <span className="font-bold">{tasks.length}</span>
          </p>
        </div>
      </div>

      <footer className="mt-auto pt-12 text-rose-400 font-medium italic text-sm">
        Task 3: Dynamic List Rendering Completed
      </footer>
    </div>
  );
}

export default App;
