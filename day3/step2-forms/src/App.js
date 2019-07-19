import React,{Component} from 'react';

class MainApp extends Component{

    constructor(){
        super();
        this.state = {
            username:'',
            userage:0
        }
        this.submitHandler = this.submitHandler.bind(this);
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.ageChangeHandler = this.ageChangeHandler.bind(this);
    }

    submitHandler(evt){
        evt.preventDefault();
        alert("Username : "+this.state.username+" Userage: "+this.state.userage);
    }

    nameChangeHandler(evt){
        this.setState({
            username: evt.target.value
        })
    }

    ageChangeHandler(evt){
        this.setState({
            userage: evt.target.value
        })
    }
    
    render(){
        return(
            <div>
                <h1>Hello from Main Application</h1>
                <hr/>
                <form onSubmit = {this.submitHandler} action="#">
                    <label htmlFor="uname">User Name: </label>
                    <input id="uname" value = {this.state.username} onChange={this.nameChangeHandler} type="text"/><br/><br/>
                    <label htmlFor="uage">User Age: </label>
                    <input id="uage" value = {this.state.userage} onChange={this.ageChangeHandler} type="number"></input><br/><br/>
                    <button>OK</button>
                </form>
            </div>
        )
    }
}

export default MainApp;