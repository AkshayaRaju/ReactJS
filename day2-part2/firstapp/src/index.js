import React, {Component} from 'react'; 
import ReactDom from 'react-dom';

const heroes=["Ironman","Superman","Batman","Joker","Spiderman","Joker"];

//Create an element to render
/*let elm=React.createElement("h1",null,"Welcome to your life!");

//Create a nested element to render
let elm = React.createElement("ul",null,[React.createElement("li",null,"List Item 1"),
                                        React.createElement("li",null,"List Item 2"),
                                        React.createElement("li",null,"List Item 3"),
                                        React.createElement("li",null,"List Item 4"),
                                        React.createElement("li",null,"List Item 5")] ); //Nested*/

//Create a dynamic nested element to render                                        
/*let elm = React.createElement("ol",null,heroes.map(function(val,index){
                //return React.createElement("li",null,val); //Shows error in console as unique key prop is not found
                return React.createElement("li",{key:index},val);
            }));*/

//Create a JSX element to render            
/* let elm = <div>
            <h1>Heroes List</h1>
            <ol>
                <li>{heroes[0]}</li>
                <li>{heroes[1]}</li>
                <li>{heroes[2]}</li>
                <li>{heroes[3]}</li>
                <li>{heroes[4]}</li>
                <li>{heroes[5]}</li>
            </ol>
            </div> 

//Create a dynamic JSX element to render            
let elm = <div>
            <h1>Heroes List</h1>
            <ol>
                {
                    heroes.map((val,index)=>{
                        return <li key = {index}>{val}</li>
                    })
                }
            </ol>
         </div>*/

//Components         
class HeadingComponent extends Component{
    render(){
        return <h1>{this.props.title}</h1>
    }
}
class HeroListComponent extends Component{
    render(){
        return <ol>
                    {
                        this.props.heroes.map((val,index)=>{
                            return <li key = {index}>{val}</li>
                        })
                    }
                </ol>
    }
}

//Composite Component
class MainComponent extends Component{
    compTitle = "Heroes List";
    avengers = ["Ironman","Captain America","Hulk","Black Widow","Thor"];
    justiceleague = ["Superman","Batman","Wonder Woman"]
    render(){
        return <React.Fragment>
                  <HeadingComponent title={this.compTitle}/>
                  <HeroListComponent heroes={this.avengers}/>
                  <hr/>
                  <HeroListComponent heroes={this.justiceleague}/>
                </React.Fragment>
    }
}

//Render DOM with MainComponent
ReactDom.render(<MainComponent/>,document.getElementById("root"));