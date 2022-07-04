import React from 'react';
import './App.css';
import TopAppBar from './components/AppBar';
import PolicyDataGrid from './components/PolicyTable';
function App() {
  return (
    <div className="App">
     
       <TopAppBar></TopAppBar>
      <PolicyDataGrid></PolicyDataGrid>
    </div>
  );
}

export default App;
