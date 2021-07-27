import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/MySpace/Home';
import Planet from './pages/MySpace/Planet';
import OurSpace from './pages/OurSpace';
import SpaceJourney from './pages/SpaceJourney';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/MySpace">
            <Route exact path="/MySpace" component={Home}/>
            <Route path="/MySpace/home" component={Home}/>
            <Route path="/MySpace/planet" component={Planet}/>
          </Route>
          <Route path="/our" component={OurSpace}/>
          <Route path="/journey" component={SpaceJourney}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
