import React from 'react';

import DatePicker from './DatePicker';
import Dropdown from './Dropdown';

const BookingForm = (props) => {
    return (
        <form action={props.action}>
            <DatePicker name='checkin-date' label='Check-In Date' />
            <DatePicker name='checkout-date' label='Check-Out Date' />
            <Dropdown
                name='rooms'
                options={[
                    'Family Room',
                    'Deluxe Room',
                    'Classic Room',
                    'Superior Room',
                    'Luxury Room'
                ]} />
            <Dropdown
                name='guests'
                options={[
                    '1 Adult',
                    '2 Adults',
                    '3 Adults',
                    '4 Adults',
                    '5 Adults',
                    '6 Adults'
                ]} />
            <button type="submit">Check Availability</button>
        </form>
    );
}

export default BookingForm;