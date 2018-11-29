import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

//import {BrowserRouter, Route } from 'react-router-dom'

const localizer = Calendar.momentLocalizer(moment);

//[year, month, day, hour, minute, second, millisecond]

class CalendarView extends Component {
  state = {
    events: [
      {
        start: new Date(2018, 10, 22, 15, 30),
        end: new Date(moment().add(1, "hours")),
        title: "Some title"
      },
      {
        start: new Date(2018, 10, 25, 15, 30),
        end: new Date(2018, 10, 25, 16, 30),
        title: "thing 2"
      },
    ]
  };

  render() {
    return (
      <div>
        <p> test </p>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="week"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default CalendarView;
