import React from 'react';
import './App.css';
import Header from './components/header/Header';
import routes from './router'
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
       <Header />
       {routes}
       <Footer />
    </div>
  );
}

export default App;
