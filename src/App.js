import './App.css';
import Header from './Header';
import Cards from './Cards'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>Im chat page</h1>
          </Route>
          <Route path="/">
            <Cards/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

// {/* {Login page} */}
// {Profile page for editing details}
// {Post option in profile page}


// {/* {Header} */}
// {/* {Post card} */}
// {/* {Buttons at the bottom} */}

// {/* {chat screen} */}
// {/* {individual chat screen} */}

export default App;
