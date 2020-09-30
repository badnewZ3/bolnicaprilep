import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './components/fontawesome/fontawesome';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoHeader from './components/info-page/info.component';
import Header from './components/header/header.component';
import MainPage from './components/main-page/main-page.component';
import SiteOddeli from './components/oddeli/oddeli-site.component';



function App() {
  return (
    <div className="App">
      <InfoHeader/>
      <Header/>  
      <Switch>
      <Route exact path='/' component={MainPage}/>
      <Route path='/oddeli' component={SiteOddeli} />
      </Switch>
    </div>
  );
}

export default App;
