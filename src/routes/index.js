import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch } from 'react-router-dom';

import Home from './js/components/Home/Home.js';
import BigSur from './js/components/Travel/BigSur.js';
import Seattle from './js/components/Travel/Seattle.js';
import London from './js/components/Travel/London.js';
import SouthBay from './js/components/Travel/SouthBay.js';
import Sunsets from './js/components/Sunsets/Sunsets.js';
import Friends from './js/components/Friends/Friends.js';
import AboutMe from './js/components/AboutMe/AboutMe.js';
import NoMatch from './js/components/NoMatch/NoMatch.js';

export default () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/travel" component={BigSur} />
        <Route exact path="/travel/bigsur" component={BigSur} />
        <Route exact path="/travel/seattle" component={Seattle} />
        <Route exact path="/travel/london" component={London} />
        <Route exact path="/travel/southbay" component={SouthBay} />
        <Route exact path="/sunsets" component={Sunsets} />
        <Route exact path="/friends" component={Friends} />
        <Route exact path="/about-me" component={AboutMe} />
        <Route component={NoMatch}/>
      </Switch>
    </Router>
  );
