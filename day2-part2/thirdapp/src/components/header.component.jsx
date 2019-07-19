import React,{Component} from 'react';
import ReactDOM from 'react-dom';

export default class HeaderComponent extends Component{
    render(){
        return <h2 style={{color:'green',backgroundColor:'orange',width:'max-content',fontSize:25}}>{this.props.title}</h2>        
    }
}