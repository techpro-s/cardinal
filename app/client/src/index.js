import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';
import App from './App';
import CMS from './pages/Admin/CMS'

import './css/cardinal.css';


ReactDOM.render((
    <CookiesProvider>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App}/>
                <Route path='/Admin' componet={CMS}/>"
                <Route path='/Admin/CMS/Challenge' componet={CMS}/>"
                <Route path='/Admin/CMS/Events' componet={CMS}/>"
                <Route path='/Admin/CMS/Users' componet={CMS}/>"
            </Switch>
        </BrowserRouter>
    </CookiesProvider>)
,document.getElementById('root')
);
