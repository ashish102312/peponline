import { useState } from 'react';
import './index.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <>
      <div className="blob-1"></div>
      <div className="blob-2"></div>
      
      <div className="auth-container">
        <div className="header">
          <h2 className="title">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="subtitle">
            {isLogin ? 'Sign in to your account' : 'Register to get started'}
          </p>
        </div>

        {submitted ? (
           <div style={{ textAlign: 'center', padding: '2rem 0' }}>
             <h3 style={{ color: '#86efac', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Success!</h3>
             <p style={{ color: '#cbd5e1' }}>{isLogin ? 'You are now signed in.' : 'Account created successfully!'}</p>
             <button onClick={() => setSubmitted(false)} className="submit-btn" style={{ marginTop: '2rem' }}>
               Go Back
             </button>
           </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-group">
                <label className="label">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input"
                  placeholder="John Doe"
                  required={!isLogin}
                />
              </div>
            )}

            <div className="form-group">
              <label className="label">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <label className="label">Password</label>
                {isLogin && <a href="#" style={{ fontSize: '0.8rem', color: '#c084fc', textDecoration: 'none' }}>Forgot?</a>}
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>
        )}

        {!submitted && (
          <div className="toggle-text">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="toggle-btn"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
