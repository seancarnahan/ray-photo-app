import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';

import Home from './../js/components/Home/Home';
import Gallery from './../js/components/Gallery/Gallery';
import AboutMe from './../js/components/AboutMe/AboutMe';
import NoMatch from './../js/components/NoMatch/NoMatch';

//dont need the return or extra div
//because of the switch component
//exact makes it so it needs to be that exact path
export default () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/about-me" component={AboutMe} />
        <Route component={NoMatch}/>
      </Switch>
    </Router>
  );
