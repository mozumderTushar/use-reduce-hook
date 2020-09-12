import React from 'react';
import './App.css';
import PatientManagement from './components/PatientManagement/PatientManagement';
import ReducerCount from './components/ReducerCount/ReducerCount';

function App() {
  return (
    <div className="App">
      <ReducerCount></ReducerCount>
      <PatientManagement></PatientManagement>
    </div>
  );
}

export default App;
