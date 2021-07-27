import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MySpace from './pages/MySpace';
import OurSpace from './pages/OurSpace';
import SpaceJourney from './pages/SpaceJourney';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MySpace}/>
          <Route path="/our" component={OurSpace}/>
          <Route path="/space" component={SpaceJourney}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
