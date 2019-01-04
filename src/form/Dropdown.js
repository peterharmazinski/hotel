import React from 'react';

const Dropdown = (props) => {
    const options = props.options.map((option) =>
        <option>{option}</option>
    );
    return (
        <div className='dropdown-wrapper'>
            <label htmlFor={props.name}>Room</label>
            <select name={props.name}>
                
            </select>
        </div>
    );
}

export default Dropdown;