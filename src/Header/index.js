import React from 'react';
import GuestInputForm from './GuestInputForm';

const Header = (props) => {
    return(
        <header>
        <h1>RSVP</h1>
        <p>An Appointment App</p>
        <GuestInputForm
        newGuestSubmitHandler = {props.newGuestSubmitHandler}
        handelNameInput = {props.handelNameInput}
        pendingGuest = {props.pendingGuest} />
      </header>
    )

};



export default Header;