import React, {Component} from "react";
import nextId from "react-id-generator";


class WidgetFeedback extends Component {
    constructor() {
        super();
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
          };
          nextId();   
    }
checkBgrColor = (item) => {
        if(item === 'good'){return 'green'}
        else if(item === 'neutral'){return 'tomato'}
        else if(item === 'bad'){return 'black'}
        else {return 'red'}
    }
FeedbackCounter = (event) =>{

let eventName = event.target.name;
console.log(eventName);
if(eventName === 'good'){return this.setState((prevStay)=>{
    return {good : prevStay.good + 1}})}
else if (eventName === 'neutral'){return this.setState((prevStay)=>{
    return {neutral : prevStay.neutral + 1}})}   
else if (eventName === 'bad'){return this.setState((prevStay)=>{
    return {bad : prevStay.bad + 1}})}    
}
addButtons = () => {
    let countOfButton = Object.keys(this.state);
    return countOfButton.map(item => 
   <button key={nextId()} name = {item} style={{
    width: '100px',
    height: 30,
    padding: 10,
    margin: 20,
    borderRadius: 5,
    alignItems:'center',
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    fontSize: 16,
    backgroundColor: this.checkBgrColor(item),
   
   }} onClick={this.FeedbackCounter}>{item[0].toUpperCase()+item.slice(1,item.length)}</button>);  
}
statistics = () => {
    let countOfButton = Object.keys(this.state);
    return  countOfButton.map(item =>   
    <span style={{fontSize : "24px"}} key={nextId()}>{item[0].toUpperCase()+item.slice(1,item.length)} : {this.state[item]}</span>);  
}

render()
{return (
    <div style= {
        {display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems:'center'
       }} key={this.htmlId}>
        <div style= {
        {display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginBottom: 20,
       }}>Please leave feedback: <div> {this.addButtons()}</div></div>
        <div style= {
        {display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems:'center'
       }}> Statistics:  {this.statistics()}</div>      
    </div>
)}
}

export default WidgetFeedback;