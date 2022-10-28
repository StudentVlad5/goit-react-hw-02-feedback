import nextId from "react-id-generator";
import propTypes from 'prop-types';
import css from './AddButtons.module.css';

const checkBgrColor = (item) => {
    if(item === 'good'){return 'green'}
    else if(item === 'neutral'){return 'tomato'}
    else if(item === 'bad'){return 'black'}
    else {return 'red'}
}

const AddButtons =({countOfButton, state, feedbackMessage, TotalFeedback})=>{ 
    return (<div className={css.countContainer}>
            Please leave feedback: <div className={css.btnContainer}>{countOfButton.map(item => 
            <button key={nextId()} name = {item} className = {css.pressBtn} style={{ backgroundColor: checkBgrColor(item),
            }} onClick={(event)=>{feedbackMessage(event);TotalFeedback(event)}} >{item[0].toUpperCase()+item.slice(1,item.length)}</button>)}</div></div>)}

export default AddButtons;

AddButtons.propTypes = {
    countOfButton: propTypes.arrayOf(
        propTypes.string),
    state: propTypes.object,
    feedbackMessage: propTypes.func,
    TotalFeedback: propTypes.func,
  }