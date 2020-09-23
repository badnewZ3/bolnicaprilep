import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header.component';
import InfoHeader from './components/info-page/info.component';


function App() {
  return (
    <div className="App">
      <InfoHeader/>
      <Header/>
    </div>
  );
}

export default App;
