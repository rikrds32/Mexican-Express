import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Packages from "./components/Packages";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/aboutus' component={About}/>
          <Route exact path='/packages' component={Packages}/>
          <Route exact path='/contactus' component={Contact}/>
        </Switch>
      </>
    </Router>
  );
}


export default App;
