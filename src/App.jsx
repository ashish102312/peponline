import { useState, useEffect } from "react"
import AuthForm from "./AuthForm"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  // Load tasks from localStorage on initial render
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("permanent-tasks")
    if (savedTodos) return JSON.parse(savedTodos)
    
    // Default initial tasks for @ashish102312
    const now = new Date()
    return [
      {
        id: 1,
        text: "Initialize PepOnline task tracker 🚀",
        completed: false,
        fullDate: now.toDateString(),
        timestamp: now.getTime()
      },
      {
        id: 2,
        text: "Sync with @ashish102312 GitHub profile",
        completed: false,
        fullDate: now.toDateString(),
        timestamp: now.getTime() - 1000
      }
    ]
  })
  const [inputValue, setInputValue] = useState('')

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("permanent-tasks", JSON.stringify(todos))
  }, [todos])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputValue.trim() !== '') {
      const now = new Date()
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
        date: now.toLocaleDateString(),
        fullDate: now.toDateString(), // e.g. "Sat Mar 28 2026"
        timestamp: now.getTime()
      }
      setTodos([newTodo, ...todos])
      setInputValue('')
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Group tasks by date string
  const groupedTodos = todos.reduce((groups, todo) => {
    const date = todo.fullDate || new Date(todo.timestamp).toDateString()
    if (!groups[date]) {
      groups[date] = []
    }
    groups[date].push(todo)
    return groups
  }, {})

  // Sort dates to show most recent first
  const sortedDates = Object.keys(groupedTodos).sort((a, b) => 
    new Date(b).getTime() - new Date(a).getTime()
  )

  if (!isAuthenticated) {
    return <AuthForm onLogin={(email) => { setIsAuthenticated(true); setUserEmail(email); }} />
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#0f172a] bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] p-6 font-sans text-slate-50 overflow-y-auto">
      <div className="w-full max-w-2xl mt-10 md:mt-20 p-8 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] shadow-2xl animate-in fade-in zoom-in duration-700">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-sm font-medium text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full border border-white/5">
            Logged in as <span className="text-violet-400">{userEmail}</span>
          </div>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="text-sm font-bold text-red-500/80 hover:text-red-400 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 rounded-full transition-all"
          >
            Sign Out
          </button>
        </div>
        <div className="flex flex-col items-center mb-12 text-center">
          <h1 className="text-6xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent tracking-tight leading-tight">
            ashish102312's Tasks
          </h1>
          <div className="mt-4 flex flex-col items-center gap-2">
            <span className="text-slate-400 text-lg font-medium">
              Precision Engineering Portal • <a href="https://github.com/ashish102312" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-fuchsia-400 transition-colors">@ashish102312</a>
            </span>
            <p className="text-slate-500 text-sm max-w-md leading-relaxed opacity-80">
              A private, high-performance daily log and task management system built for focus and rapid documentation.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-4 mb-16 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-violet-600 rounded-3xl blur opacity-20 group-focus-within:opacity-40 transition duration-1000"></div>
          <input
            type="text"
            className="relative flex-1 bg-slate-900/80 border border-white/10 rounded-2xl px-6 py-5 text-slate-50 placeholder-slate-500 focus:outline-none focus:border-violet-500/50 transition-all text-xl"
            placeholder="Log something new..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button 
            type="submit" 
            className="relative bg-violet-600 hover:bg-violet-700 text-white font-black px-10 py-5 rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          >
            Log
          </button>
        </form>

        <div className="space-y-12">
          {sortedDates.length === 0 ? (
            <div className="text-center py-20 bg-white/5 rounded-[2rem] border border-dashed border-white/10">
              <span className="text-5xl block mb-4">📝</span>
              <p className="text-slate-400 text-xl font-medium">Your story begins today.</p>
            </div>
          ) : (
            sortedDates.map((dateString) => (
              <div key={dateString} className="animate-in slide-in-from-bottom-8 duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold text-violet-300 px-4 py-1.5 bg-violet-500/10 rounded-full border border-violet-500/20">
                    {dateString === new Date().toDateString() ? "Today" : dateString}
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent"></div>
                </div>
                
                <div className="grid gap-4">
                  {groupedTodos[dateString].map((todo) => (
                    <div 
                      key={todo.id} 
                      className="flex items-center justify-between p-6 bg-slate-900/40 border border-white/5 rounded-3xl group hover:bg-slate-800/60 transition-all duration-300 hover:border-violet-500/30 shadow-sm"
                    >
                      <div className="flex flex-col">
                        <span className="text-xl text-slate-200 font-medium leading-relaxed">{todo.text}</span>
                        <span className="text-sm text-slate-500 mt-1 uppercase tracking-widest font-bold">
                          {new Date(todo.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                      <button 
                        onClick={() => deleteTodo(todo.id)}
                        className="opacity-0 group-hover:opacity-100 bg-red-500/10 text-red-400 p-3 rounded-2xl hover:bg-red-500 hover:text-white transition-all transform hover:rotate-90"
                        title="Delete log"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="w-full max-w-2xl mt-12 mb-20 px-8 text-center space-y-6">
        <div className="h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <p className="text-slate-400 text-sm leading-relaxed opacity-70">
          PepOnline is a high-performance productivity suite designed for rapid task logging and personal growth tracking. 
          Developed by <a href="https://github.com/ashish102312" target="_blank" rel="noopener noreferrer" className="text-violet-400 font-bold hover:underline">Ashish Bhardwaj</a>.
        </p>
        <div className="flex justify-center gap-6 text-slate-500 uppercase tracking-widest text-[10px] font-bold">
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-violet-500 rounded-full"></span>
            Private Local Storage
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-fuchsia-500 rounded-full"></span>
            Browser Encrypted
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1 h-1 bg-pink-500 rounded-full"></span>
            Vite Powered
          </span>
        </div>
      </div>
    </div>
  )
}

export default App