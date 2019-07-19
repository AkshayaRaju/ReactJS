import React from 'react';

/*class FirstComponent extends Component{
    render(){
        return <h1>Hello from First Component!</h1>
    }
}*/

function FirstComponent(props){
    //return <h1>Hello from First Component: {props.message} and {props.secondmessage}</h1>;
    return <h1>{props.children}</h1>
}

export default FirstComponent;