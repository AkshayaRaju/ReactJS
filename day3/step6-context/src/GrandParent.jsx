import React,{Component} from 'react';
import Parent from './Parent';
import { FamilyProvider } from './familyContext';

const styles = {
    color: 'red'
}

class GrandParent extends Component{
    render(){
        return (
            <FamilyProvider value="Grandpa says hi!!!">
            <div>
                <h1 style={styles}>GrandParent Component</h1>
                <Parent/>
            </div>
            </FamilyProvider>
        )
    }
}

export default GrandParent;