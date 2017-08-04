import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CardinalNav from './components/CardinalNav';
import CardinalFooter from './components/CardinalFooter';

import Home from './pages/Home';
import Kit from './pages/Kit';
import Platform from './pages/Platform';
import Ecosystem from './pages/Ecosystem';
import Contact from './pages/Contact';

import { SERVER_URL, CLIENT_VERSION, REACT_VERSION } from './config';
import 'whatwg-fetch';

class App extends Component {

    constructor() {
      super();
      this.state = {
        clientInfo: {
          version: CLIENT_VERSION,
          react: REACT_VERSION
        }
      }
    }

    componentDidMount() {
        const search = this.props.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search);
        const lang = params.get('lang'); // bar
        var query = lang != null ? "?lang=" + lang : "";
        fetch(SERVER_URL + 'home/common' + query)
          .then(r => r.json())
          .then(json => this.setState({serverInfo: json}))
          .catch(error => console.error('Error connecting to server: ' + error));

    }

    render() {
        if(!this.state.serverInfo){
            return <div></div>
        }
      console.log(this.state.serverInfo.messages);

    return (
        <div>
            <BrowserRouter>
                <div>
                    <CardinalNav messages={this.state.serverInfo.messages.navbar}/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/kit" component={Kit}/>
                        <Route exact path="/platform" component={Platform}/>
                        <Route exact path="/ecosystem" component={Ecosystem}/>
                        <Route exact path="/contact" component={Contact}/>
                    </Switch>
                    <CardinalFooter messages={this.state.serverInfo.messages.footer}/>
                </div>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
