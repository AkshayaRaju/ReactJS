import React,{Component} from 'react';
import axios from 'axios';

export default class Herolist extends Component{

    constructor(){
        super();
        this.state={
            herolist: []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5050/data").then(
            res => {
                console.log("Response - > "+res);
                this.setState({
                    herolist: res.data
                })
            },
            err => {
                console.log("Error! ",err);
            }
        )
    }

    render(){
        return (
                <div>
                    <ul>
                        {
                            this.state.herolist.map((val,index)=>{
                                return <li key={index}>{val.title}</li>
                            })
                        }
                    </ul>

                </div>
        )
    }
}