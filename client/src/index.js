import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Platform from './pages/Platform';
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
            <Route exact path="/platform" component={Platform}/>
        </Switch>
    </BrowserRouter>)
,document.getElementById('root')
);
