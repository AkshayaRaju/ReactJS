import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './header.component';
import ListComponent from './herolist.component';

const appName = "Heroes List App";

export default class App extends Component{
    render(){
        return(
            <div>
                <h1>App Component</h1>        
                <HeaderComponent title={appName}/>
                <ListComponent/>
             </div>
        );
    }
}