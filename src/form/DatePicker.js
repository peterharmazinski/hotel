import React from 'react';

const DatePicker = (props) => {
    return (
        <div className='datepicker-wrapper'>
            <label htmlFor={props.name}>{props.label}</label>
            <input type="date" name={props.name}></input>
        </div>
    );
}

export default DatePicker;