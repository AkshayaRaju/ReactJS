import React,{Component} from 'react';

class Hero extends Component{
    constructor(){
        super();    
        this.state = {
            showHeroInfo: false
        }
    }

    render(){
            return (
                <div>
                    <h3>
                        <button onClick={
                            ()=>{
                                this.setState({
                                    showHeroInfo: !this.state.showHeroInfo
                                })
                            }
                        }>Info</button>&nbsp;
                        {this.props.herodata.title}&nbsp;
                        <button onClick={
                            ()=>{
                                this.props.deleteClickHandler()
                            }
                        }>Delete</button>
                    </h3>
                    {this.state.showHeroInfo?(
                    <ul>
                        <li>Full name: {this.props.herodata.fullname}</li>
                        <li>Power: {this.props.herodata.power}</li>
                        <li>City: {this.props.herodata.city}</li>
                    </ul>):null}
                </div>
            )
    }
}

export default Hero;