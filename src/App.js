import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My First React App!</h1>
        <p>This is a simple React application demonstrating a basic structure.</p>
        <button onClick={() => alert('Hello, React!')}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
