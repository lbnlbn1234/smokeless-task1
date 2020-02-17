import React from 'react';
import './App.css';
import store from './store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useParams
} from "react-router-dom";
import Comic from './components/Comic'
// import axios from 'axios'
function App() {
  return (
    // <div id="xxx"></div>
    <Router>
     <Switch>
       <Route exact path="/">
         <Green />
       </Route>
       <Route path="/red">
         <Red />
       </Route>
     </Switch>
     </Router>
  );
}


function Green() {
  store.greenPage.dispatch({type:'inc'});
  return (
    <main className="green-page">
    <Comic id={store.greenPage.getState()}/>
    <div>This screen is shown <span> {store.greenPage.getState()}</span> times</div>

      <Link to="/red">  <button>red    </button></Link>

    </main>
  );
}

function Red() {
  store.redPage.dispatch({type:'inc'});
  return (
    <main className="red-page">
    <Comic id={store.greenPage.getState()}/>
    <div>This screen is shown <span> {store.greenPage.getState()}</span> times</div>

      <Link to="/">  <button>green</button></Link>

    </main>
  );
}

export default App;
