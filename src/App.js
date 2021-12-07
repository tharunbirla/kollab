import './App.css';
import Header from './Header';
import Cards from './Cards'
import Chats from './Chats'
import Profile from './Profile'
import SwipeButtons from './SwipeButtons';
import ChatScreen from './ChatScreen';
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
      <Router>
        {/* <Header/> */}
        <Switch>
          <Route path="/chat/:person">
            <Header buttonBack="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header buttonBack="/" />
            <Chats />
          </Route>
          <Route path="/profile">
            <Header profileBack="/" />
            <Profile />
          </Route>
          <Route path="/">
            <Header />
            <Cards />
            <SwipeButtons />
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
// {/* {audio player inside cards} */}
// {/* {Buttons at the bottom} */}

// {/* {chat screen} */}
// {/* {individual chat screen} */}

export default App;
