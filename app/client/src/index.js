import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Kit from './pages/Kit';
import Platform from './pages/Platform';
import Ecosystem from './pages/Ecosystem';
import Contact from './pages/Contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
/*import App from './App';
import './css/App.css';
import './css/grails.css';
import './css/main.css';*/
import './css/cardinal.css';


ReactDOM.render((
  //<App />,
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/kit" component={Kit}/>
            <Route exact path="/platform" component={Platform}/>
            <Route exact path="/ecosystem" component={Ecosystem}/>
            <Route exact path="/contact" component={Contact}/>
        </Switch>
    </BrowserRouter>)
,document.getElementById('root')
);
