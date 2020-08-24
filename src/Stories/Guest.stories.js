import React from "react";
import { action } from "@storybook/addon-actions";

import Guest from "../MainContent/GuestList/Guest";
import "../index.css";

export default {
  title: "RSVP App/MainContent/Guest",
  component: Guest,
  excludeStories: /.*Data$/,
};

export const guestData = {
  name: "Hamoud",
  isConfirmed: false,
  isEditing: false,
  handleConfirmation: action("handleConfirmation"),
  handleToggleEditing: action("handleToggleEditing"),
  setName: action("setName"),
  handleRemove: action("handleRemove"),
};

export const Default = (args) => <Guest {...args} />;
Default.args = guestData;

export const Confirmed = Default.bind({});
Confirmed.args = {
  ...guestData,
  isConfirmed: true,
};

export const Editing = Default.bind({});
Editing.args = {
  ...guestData,
  isEditing: true,
};
