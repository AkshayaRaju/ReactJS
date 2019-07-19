import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './components/first.component';


ReactDOM.render(<FirstComponent message="Good Morning" secondmessage="Good Evening">
                <ul>My List</ul>
                    <li>List Item 1</li>
                    <li>List Item 2</li>
                    <li>List Item 3</li>
                </FirstComponent> , document.getElementById('root'));

