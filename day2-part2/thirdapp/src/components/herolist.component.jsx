import React,{Component} from 'react';


export default class ListComponent extends Component{
    agree = true;
    message="Hero List Component";
    render(){
        return this.agree?<h3>{this.message}</h3>:null;
    }
}