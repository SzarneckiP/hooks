import React from 'react';
import './App.css';
import HooksExample from './Components/HooksExample';
import ClassComponentsExample from './Components/ClassComponentsExample';

function App() {
  return (
    <div className='App'>
      <ClassComponentsExample />
      <HooksExample />
    </div>
  );
}

export default App;
