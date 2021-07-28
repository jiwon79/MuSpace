import React, { useState } from 'react'
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/MySpace/Home';
import Planet from './pages/MySpace/Planet';
import OurSpace from './pages/OurSpace';
import SpaceJourney from './pages/SpaceJourney';

function App() {
  const [menu, setMenu] = useState('myspace');

  return (
    <div className="App">
      <Router>
        <Header menu = {menu}/>
        <Switch>
          <Route exact path="/">
            <Redirect to="/MySpace/home"/>
          </Route>
          <Route path="/MySpace">
            <Route exact path="/MySpace" component={Home}/>
            <Route 
              path="/MySpace/home" 
              render={() => <Home menu={menu} setMenu={setMenu}/>}
            />
            <Route 
              path="/MySpace/planet" 
              render={() => <Planet menu={menu} setMenu={setMenu}/>}
            />
          </Route>
          <Route 
            path="/OurSpace"
            render={() => <OurSpace menu={menu} setMenu={setMenu}/>}
          />
          <Route 
            path="/journey" 
            render={() => <SpaceJourney menu={menu} setMenu={setMenu}/>}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
