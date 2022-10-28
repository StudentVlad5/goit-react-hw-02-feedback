import React, {Component} from "react";
import propTypes from 'prop-types';
import Notiflix from 'notiflix';
import NotificationMessage from '../NoFeedbackMassage/NoFeedbackMassage';
import Statistics from '../Statistics/Statistics';
import AddButtons from '../AddButtons/AddButtons';
import css from "./WidgetFeedback.module.css";


class WidgetFeedback extends Component {
    constructor() {
        super();
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
          };
    }

TotalFeedback = (event) =>{
     let eventName = event.target.name;
     this.clone = {};
     for (let key in this.state) {
        this.clone[key] = this.state[key];
      };
      this.clone[eventName] = this.clone[eventName] + 1;
      this.setState((prevState)=> ({ 
        [eventName]: prevState[eventName] + 1 
     }));
    return this.clone
}

countFeedback = () =>{
    this.sumOfVoice = 0;
    console.log('from clone',this.clone);
    console.log('from state',this.state);
    for (let key in this.clone) {
        this.sumOfVoice += this.clone[key];
      }
 return this.sumOfVoice
}

feedbackMessage = (event) =>{
    let eventName = event.target.name;
    if(eventName === 'good'){
        Notiflix.Notify.success('So happy your high rating')}
    else if (eventName === 'neutral'){
        Notiflix.Notify.warning('Promise to get better')}
    else if (eventName === 'bad'){
        Notiflix.Notify.failure('We apologize for the inconvenience')
    }}

render()
{
    let countOfButton = Object.keys(this.state);
    let state = this.state; 

    return (
        <div className={css.widgetFeedbackContainer} key={this.htmlId}>
        <AddButtons countOfButton={countOfButton} state={state} feedbackMessage = {this.feedbackMessage} TotalFeedback = {this.TotalFeedback} countFeedback={this.countFeedback}/>
        {this.sumOfVoice>0 && <Statistics  countOfButton={countOfButton} state={state} totalCount={this.sumOfVoice}/>}
        {!this.sumOfVoice && <NotificationMessage/>}          

    </div>
)}
}

export default WidgetFeedback;

WidgetFeedback.propTypes = {
    state: propTypes.arrayOf(
        propTypes.number
    )
  }