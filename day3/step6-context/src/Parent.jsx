import React,{Component} from 'react';
import Child from './Child';

const styles = {
    color: 'green'
}

class Parent extends Component{
    render(){
        return (
            <div>
                <h2 style={styles}>Parent Component</h2>
                <Child/>
            </div>
        )
    }
}

export default Parent;