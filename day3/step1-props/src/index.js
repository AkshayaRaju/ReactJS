import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './components/first.component';
import SecondComponent from './components/second.component';


/* ReactDOM.render(<FirstComponent secondmessage="Good Evening" second={1}>
                <ul>My List</ul>
                    <li>List Item 1</li>
                    <li>List Item 2</li>
                    <li>List Item 3</li>
                </FirstComponent> , document.getElementById('root')); */

ReactDOM.render(<SecondComponent title="Hello from index!"/>,document.getElementById('root'));

