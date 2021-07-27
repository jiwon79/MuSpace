import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import MySpace from './pages/MySpace';
import OurSpace from './pages/OurSpace';
import SpaceJourney from './pages/SpaceJourney';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
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
