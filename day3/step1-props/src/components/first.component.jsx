import React,{Component} from 'react';
import PropTypes from 'prop-types';

class FirstComponent extends Component{
    static defaultProps = {
        message : "Default message"
    }
    render(){
        //return <h1>Hello from First Component!</h1>
        return (
                <div>
                <h1>{this.props.message}</h1>
                <h2>{this.props.secondmessage}</h2>
                <h3>{this.props.second}</h3>
                    {this.props.children}
                </div>
        );
    }
}

FirstComponent.propTypes = {
    second: PropTypes.number.isRequired //Now property called second is made as required
}

/*//Another way to create a component
function FirstComponent(props){
    //return <h1>Hello from First Component: {props.message} and {props.secondmessage}</h1>;
    return <h1>{props.children}</h1>
}*/

export default FirstComponent;