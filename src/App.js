import React from 'react';
import './App.css';
import Header from './components/header/Header';
import routes from './router'


function App() {
  return (
    <div className="App">
       <Header />
       {routes}
    </div>
  );
}

export default App;
