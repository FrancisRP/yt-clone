import React from 'react';
import './App.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Videos from './Components/Videos'
import Search from './Components/Search'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
       <Header />
      <Switch>
        <Route path="/search/:searchTerm">
          <div className="App">
            <div className="app__page">
              <Sidebar />
              <Search />
            </div>
          </div>
        </Route>
        <Route path="/">
          <div className="App">
            <div className="app__page">
              <Sidebar />
              <Videos />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
