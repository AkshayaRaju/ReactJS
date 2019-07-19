import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class NotFoundComponent extends Component{
    render(){
        return (
            <div>
                <h1>Error 404</h1>
                <h2>The requested page is not found</h2>
                <Link to="/">Go home!</Link>
            </div>
        )
    }
}

export default NotFoundComponent;