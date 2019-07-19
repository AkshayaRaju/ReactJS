import React,{Component} from 'react';

export default class HeroComponent extends Component{
    render(){
        return this.props.data.map((val,index)=>{
            return( 
                    <div className="box" key={index}>
                        <h1>{val.title}</h1>
                        <h2>{val.firstname+" "+val.lastname}</h2>
                        <img src={val.poster} alt={val.title}></img>
                        <p>
                            City:<span>{val.city}</span> <br/>
                            Release Date: <span>{val.releasedate}</span> <br/>
                            Ticket Price: <span>INR {val.ticketprice}</span>
                        </p>
                    </div>
            );
        });
    }
}