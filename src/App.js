import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BugPage from './components/Bug/BugPage';
import ProjectPage from './components/Project/ProjectPage';
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
            <Route path="/projects" exact component={ProjectPage}/>
            <Route path="/projects/:projectId" exact component={ProjectInfo}/>
            <Route path="/bugs" exact component={BugPage}/>
            <Route path="/bugs/:bugId" exact component={BugInfo}/>
            <Route path="/profile" exact component={Profile}/>
        </Router>
    </div>

  );
}

export default App;
