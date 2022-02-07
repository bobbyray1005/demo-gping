//import logo from './logo.svg';
import './App.css';

import {Nav, Home, Tweet, AllU, AddU, Addtweet} from './component/exporter'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tweets" component={Tweet} />
            <Route exact path="/alluser" component={AllU} />
            <Route exact path='/adduser' component={AddU} />
            <Route exact path='/addtweet' component={Addtweet}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
