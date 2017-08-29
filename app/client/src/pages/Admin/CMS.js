import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CardinalFooter from '../../components/CardinalFooter';
import AdminNavbar from '../../components/CMS/AdminNavbar';
import Sponsor from '../Sponsor/index';
import Challenges from '../Challenges/index';
import School from '../School/index';
import { SERVER_URL, CLIENT_VERSION, REACT_VERSION } from '../../config';
import 'whatwg-fetch';

class Cms extends Component{

    constructor() {
        super();
        this.state = {
            clientInfo: {
                version: CLIENT_VERSION,
                react: REACT_VERSION
            }
        }
    }

    /*
    <div>
        <BrowserRouter>
            <div>
                <AdminNavbar messages={this.state.serverInfo.messages.navbar}/>
                <Switch>
                <Route exact path="/admin/sponsor" component={Sponsor}/>
                <Route exact path="/admin/school" component={School}/>
                <Route exact path="/admin/challenge" component={Challenge}/>
                </Switch>
                <CardinalFooter messages={this.state.serverInfo.messages.footer}/>
            </div>
        </BrowserRouter>
    </div>
    }*/

    componentDidMount() {
        const cookies = new Cookies();

        const search = this.props.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search);
        const lang = params.get('lang'); // bar

        if (lang != null){
            cookies.set('lang', lang, { path: '/' });
        }else{
            if(cookies.get('lang') == null){
                cookies.set('lang', 'en', { path: '/' });
            }
        }

        var query = "?lang=" + cookies.get('lang');
        fetch(SERVER_URL + 'admin/index' + query)
          .then(r => r.json())
          .then(json => this.setState({serverInfo: json}))
          .catch(error => console.error('Error connecting to server: ' + error));

    }

    render() {
        if(!this.state.serverInfo){
            return <div></div>
        }
        console.log(this.state.serverInfo.messages.navbar);
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <AdminNavbar messages={this.state.serverInfo.messages.navbar}/>
                        <Switch>
                            <Route exact path="/admin/" component={Challenges}/>
                            <Route exact path="/admin/sponsor" component={Sponsor}/>
                            <Route exact path="/admin/school" component={School}/>
                            <Route exact path="/admin/challenges" component={Challenges}/>
                        </Switch>
                        <CardinalFooter messages={this.state.serverInfo.messages.footer}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default Cms;
