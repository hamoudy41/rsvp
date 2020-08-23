import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import MainContent from "./MainContent";

class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: "Hamoud",
        isConfirmed: false,
        isEditing: false,
        id: 1
      },
      {
        name: "Geert",
        isConfirmed: false,
        isEditing: false,
        id: 2
      },
      {
        name: "Tim",
        isConfirmed: false,
        isEditing: false,
        id: 3
      }
    ]
  };

lastGuestId = 3;

  newGuestId = () => {
    let id = this.lastGuestId;
    id += 1;
    this.lastGuestId = id;
    return id;
  }

  toggleGuestPropertyAt = (property, id) =>
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (guest.id === id) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });

  setNameAt = (name, id) =>
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (guest.id === id) {
          return {
            ...guest,
            name
          };
        }
        return guest;
      })
    });

  toggleConfirmationAt = id =>
    this.toggleGuestPropertyAt("isConfirmed", id);

  removeGuestAt = id => {
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    });
  };

  toggleEditingAt = id => this.toggleGuestPropertyAt("isEditing", id);

  toggleFilter = () => this.setState({ isFiltered: !this.state.isFiltered });

  handelNameInput = e => this.setState({ pendingGuest: e.target.value });

  newGuestSubmitHandler = e => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState({
      guests: [
        
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id
        },
        ...this.state.guests
        
      ],
      pendingGuest: ""
    });
  };

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => (guest.isConfirmed ? total + 1 : total),
      0
    );

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      <div className="App" > 
        <Header
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          handelNameInput={this.handelNameInput}
          pendingGuest={this.state.pendingGuest}
        />
        <MainContent
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          totalInvited={totalInvited}
          guests={this.state.guests}
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}
          removeGuestAt={this.removeGuestAt}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}

export default App;
