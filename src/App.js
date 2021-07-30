import React, { useState } from 'react';
import './App.css';
import HooksExample from './Components/HooksExample';
import ClassComponentsExample from './Components/ClassComponentsExample';

function App() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div className='App'>
      <h1>Learn Hooks</h1>

      <button onClick={() => setSelectedId(selectedId + 1)}>Zmień ID</button>
      <ClassComponentsExample id={selectedId} />
      <HooksExample id={selectedId} />
    </div>
  );
}

export default App;
