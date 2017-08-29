import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';
import App from './App';
import Cms from './pages/Admin/Cms';

import './css/cardinal.css';


ReactDOM.render((
    <CookiesProvider>
        <BrowserRouter>
            <Switch>
                <Route path="/Admin" component={Cms}/>
                <Route path="/" component={App}/>
            </Switch>
        </BrowserRouter>
    </CookiesProvider>)
,document.getElementById('root')
);
