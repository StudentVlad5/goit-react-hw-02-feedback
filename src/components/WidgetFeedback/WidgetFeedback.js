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
     this.sumOfVoice = this.state.good + this.state.bad + this.state.neutral + 1;
      this.setState((prevState)=> ({ 
        [eventName]: prevState[eventName] + 1 
     }));
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
        <AddButtons countOfButton={countOfButton} state={state} feedbackMessage = {this.feedbackMessage} TotalFeedback = {this.TotalFeedback}/>
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