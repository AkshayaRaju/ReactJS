import React,{Component} from 'react';

class SecondComponent extends Component{
    constructor(){
        super();
        this.state = {
            title: "App Title",
            power: 5
        }
        this.clickHandler2 = this.clickHandler2.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    //Non lifecycle method
    clickHandler(){
        console.log("You clicked!");
        this.setState({                 //Won't work as "this" is undefined here
            title: "App Title changed!"
        });
    }

    //To test constructor binding
    clickHandler2(){
        console.log("You clicked 2!");
        this.setState({                 //Won't work as "this" is undefined here
            title: "App Title changed!"
        });
    }

    changeHandler(evt){
        this.setState({
            power: evt.target.value
        })
    }

    render(){
        return (
                <div>
                    <h1>State vs Props Exercise</h1>
                    <h2>State Title : {this.state.title}</h2>
                    <h3>Props Title : {this.props.title}</h3>
                    <hr/>
                    <h2>Event handler scope resolution Exercise</h2>
                    <button onClick = {this.clickHandler}>Click Me - I won't work!</button>&nbsp;
                    <button onClick = {this.clickHandler.bind(this)}>Click Me - I bind!</button>&nbsp;
                    <button onClick = {()=>this.clickHandler()}>Click Me - I am fat arrow!</button>&nbsp;
                    <button onClick = {this.clickHandler2}>Constructor Binding - I work!</button>
                    <hr/>
                    <h2>Event handling Example Exercise</h2>
                    <input value={this.state.power} onChange={this.changeHandler} type="range" min="1" max="100" step="1"></input>
                    <p>Power = {this.state.power}</p>
                </div>
        );
    }
}

export default SecondComponent;