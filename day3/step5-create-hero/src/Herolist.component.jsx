import React,{Component} from 'react';
import Heading from './Heading.component';
import Hero from './Hero.component';

class HerolistComponent extends Component{
    constructor(){
        super();
        this.state={
            heroes:[
                {title : "Ironman",city: "New York", power:7, fullname:"Tony Stark"},
                {title: "Spiderman", city: "Queens",power:2, fullname: "Peter Parker"},
                {title: "Batman", city: "Gotham", power:5, fullname: "Bruce Wayne"}
            ]
        }
    }

    deleteHero(idx){
        console.log("Deleting hero: "+idx);
        this.setState({
            heroes:this.state.heroes.filter((val,index)=>{
                return index!==idx;
            })
        })
        
    }

    render(){
        return(
            <div>
                <Heading/>
                <hr/>
                {
                    this.state.heroes.map((val,index)=>{
                        return <Hero key={index} herodata={val} deleteClickHandler={this.deleteHero.bind(this,index)}></Hero>
                    })
                }
           </div>
        )
    }
}

export default HerolistComponent;