import React,{Component} from 'react';

class SupermanComponent extends Component{
    render(){
        return (
            <div>
                <h1>Superman Application</h1>
                <h2>Quantity : {this.props.match.params.qty}</h2>
            </div>
        )
    }
}

export default SupermanComponent;