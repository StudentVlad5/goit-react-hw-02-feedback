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

cloneTotalFeedback = (event) =>{
     let eventName = event.target.name;
     this.clone = {};
     for (let key in this.state) {
        this.clone[key] = this.state[key];
      }
        if(eventName === 'good'){ this.clone.good = this.clone.good + 1}
        else if (eventName === 'neutral'){this.clone.neutral = this.clone.neutral + 1}
        else if (eventName === 'bad'){this.clone.bad = this.clone.bad + 1};
    return this.clone
}

countFeedback = () =>{
    this.sumOfVoice = 0;
    for (let key in this.clone) {
        this.sumOfVoice += this.clone[key];
      }
 return this.sumOfVoice
}

feedbackCounter = (event) =>{
    let eventName = event.target.name;
    if(eventName === 'good'){
        Notiflix.Notify.success('So happy your high rating');
        return this.setState((prevStay)=>{
        return {good : prevStay.good + 1}})}
    else if (eventName === 'neutral'){
        Notiflix.Notify.warning('Promise to get better');
        return this.setState((prevStay)=>{
        return {neutral : prevStay.neutral + 1}})}   
    else if (eventName === 'bad'){
        Notiflix.Notify.failure('We apologize for the inconvenience')
        return this.setState((prevStay)=>{
        return {bad : prevStay.bad + 1}})};
    }

render()
{
    let countOfButton = Object.keys(this.state);
    let state = this.state; 

    return (
        <div className={css.widgetFeedbackContainer} key={this.htmlId}>
        <AddButtons countOfButton={countOfButton} state={state} feedbackCounter = {this.feedbackCounter} cloneTotalFeedback = {this.cloneTotalFeedback} countFeedback={this.countFeedback}/>
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