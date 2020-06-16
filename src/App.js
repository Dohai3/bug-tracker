import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BugList from './components/Bug/BugList';
import ProjectList from './components/Project/ProjectList';
import Dashboard from './components/Dashboard';
import NavigationBar from './components/NavigationBar';
import Profile from './components/Profile';

function App() {
  return (
    <div>
        <NavigationBar/>
        <Router>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/projectList" exact component={ProjectList}/>
            <Route path="/bugList" exact component={BugList}/>
            <Route path="/profile" exact component={Profile}/>
        </Router>
    </div>

  );
}

export default App;
