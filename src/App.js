import React from 'react';
import './components/fontawesome/fontawesome';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header.component';
import InfoHeader from './components/info-page/info.component';
import MainSection from './components/main-section/main-section.component';
import CardSection from './components/card-section/card-section.component';



function App() {
  return (
    <div className="App">
      <InfoHeader/>
      <Header/>
      <MainSection/>
      <CardSection />
     
    </div>
  );
}

export default App;
