import React,{Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import IronmanComponent from './Ironman.component';
import SupermanComponent from './Superman.component';
import SpidermanComponent from './Spiderman.component';
import NotFoundComponent from './NotFound.component';

let quantity = 250;
class MainComponent extends Component{
  render(){
    return(
        <div>
          <h1>Routing Application</h1>
          <h2>This list links refreshes the page! Don't use!</h2>
          <ul>
            <li><a href="/">IRONMAN</a></li>
            <li><a href="/superman">SUPERMAN</a></li>
            <li><a href="/spiderman">SPIDERMAN</a></li>
            <li><a href="/badman">BADMAN</a></li>
          </ul>
          <hr/>
          <BrowserRouter>
            <h2>This list links do not refresh the page! Use!</h2>
            <ul>
              <li><Link to ="/">IRONMAN</Link></li>
              <li><Link to ={"/superman/"+quantity}>SUPERMAN</Link></li>
              <li><Link to ="/spiderman">SPIDERMAN</Link></li>
              <li><Link to ="/badman">BADMAN</Link></li>
            </ul>
            <hr/>
            <Switch>
              <Route path="/" exact component={IronmanComponent}/>
              <Route path="/superman/:qty" component={SupermanComponent}/>
              <Route path="/spiderman" component={SpidermanComponent}/>
              <Route component={NotFoundComponent}/>
            </Switch>
          </BrowserRouter>
        </div>
    ) 
  }
}

export default MainComponent;