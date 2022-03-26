
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Nav from './Components/Nav';

import Map from './Components/Map';
import Search from './Components/Search';
function App() {
  return (
    <div className="App">
    
    
     
     
   
     <Router>
     <Nav/>
     
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/search">
              <Search/>
              </Route>
              
            
          </Switch>
         
        </Router>
    </div>
  );
}

export default App;
