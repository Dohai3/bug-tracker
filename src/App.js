import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BugList from './components/Bug/BugList';
import ProjectList from './components/Project/ProjectList';
import Dashboard from './components/Dashboard';
import NavigationBar from './components/NavigationBar';
import Profile from './components/Profile';
import BugInfo from './components/Bug/BugInfo';
import ProjectInfo from "./components/Project/ProjectInfo";

function App() {
  return (
    <div>
        <NavigationBar/>
        <Router>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/projects" exact component={ProjectList}/>
            <Route path="/projects/:projectId" exact component={ProjectInfo}/>
            <Route path="/bugs" exact component={BugList}/>
            <Route path="/bugs/:bugId" exact component={BugInfo}/>
            <Route path="/profile" exact component={Profile}/>
        </Router>
    </div>

  );
}

export default App;
