import Navbar from './Components/Navbar/Navbar';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/index';
import About from './Components/About/index';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
