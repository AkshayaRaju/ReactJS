import React,{Component} from 'react';
import { FamilyConsumer} from './familyContext';

const styles = {
    color: 'blue'
}

class Child extends Component{
    render(){
        return (
            <div>
                    <h2 style={styles}>Child Component</h2>
                    <FamilyConsumer>
                        {
                            (value)=>{
                                return <h4>Message from Grandparent : {value}</h4>
                            }
                        }
                    </FamilyConsumer>
            </div>
        )
    }
}

export default Child;