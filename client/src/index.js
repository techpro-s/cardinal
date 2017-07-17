import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import CMS from './pages/Admin/CMS';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
/*import App from './App';
import './css/App.css';
import './css/grails.css';
import './css/main.css';*/

ReactDOM.render((
  //<App />,
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path ='/Admin' componet={CMS}/>"
            <Route path ='/Admin/CMS/Challenge' componet={CMS}/>"
            <Route path ='/Admin/CMS/Events' componet={CMS}/>"
            <Route path ='/Admin/CMS/Users' componet={CMS}/>"
        </Switch>
    </BrowserRouter>)
,document.getElementById('root')
);
