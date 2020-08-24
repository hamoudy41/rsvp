import React from "react";

import PendingGuest from "../MainContent/GuestList/PendingGuest";
import "../index.css";

export default {
  title: "RSVP App/MainContent/PendingGuest",
  component: PendingGuest,
  excludeStories: /.*Data$/,
};

export const PendingGuestData = {
  name: "Hamoud"
};

export const Default = (args) => <PendingGuest {...args} />;
Default.args = PendingGuestData;

