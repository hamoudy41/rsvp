import React from "react";
import { action } from "@storybook/addon-actions";

import GuestList from "../MainContent/GuestList/index";
import "../index.css";

export default {
  title: "RSVP App/MainContent/GuestList",
  component: GuestList,
  excludeStories: /.*Data$/,
};

let guests = [
  {
    name: "Hamoud",
    isConfirmed: false,
    isEditing: false,
    id: 1,
  },
  {
    name: "Geert",
    isConfirmed: false,
    isEditing: false,
    id: 2,
  },
  {
    name: "Tim",
    isConfirmed: false,
    isEditing: false,
    id: 3,
  },
];

export const guestListData = {
  guests: guests,
  isFiltered: false,
  pendingGuest: null,
  removeGuestAtAt: action("removeGuestAtAt"),
  toggleEditingAt: action("toggleEditingAt"),
  removeGuestAt: action("removeGuestAt"),
  toggleConfirmationAt: action("toggleConfirmationAt"),
};

export const Default = (args) => <GuestList {...args} />;
Default.args = guestListData;

export const WithPending = Default.bind({});
WithPending.args = {
  ...guestListData,
  pendingGuest: "John Doe",
};

export const WithConfirmed = Default.bind({});
WithConfirmed.args = {
  ...guestListData,
  guests: guests.map((guest) =>
    guest.id !== 1 ? guest : { ...guest, isConfirmed: true }
  ),
};
