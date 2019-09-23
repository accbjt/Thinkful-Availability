import React, { Component } from 'react';
import moment from 'moment';

import AdvisorAvailabilityContainer from './containers/AdvisorAvailabilityContainer';
import NameFormContainer from './containers/NameFormContainer';

const today = moment(new Date()).format('MM/DD/YYYY');

class App extends Component {
  componentDidMount() {
    this.props.fetchAvailabilities();
  }

  render() {
    const { today, appointments } = this.props;

    return (
      <div className="App container">
        <h1>Book Time with an Advisor</h1>

        {today && <span id="today">Today is {today}.</span>}

        <NameFormContainer />

        <h2>Available Times</h2>
        <AdvisorAvailabilityContainer />

        <h2>Booked Times</h2>
        <table className="bookings table">
          <thead>
            <tr>
              <th>Advisor ID</th>
              <th>Student Name</th>
              <th>Date/Time</th>
            </tr>
          </thead>
          {
            appointments.map(appointment => {
              return (
                  <tbody key={appointment.id}>
                    <tr>
                      <td>{appointment.advisorId}</td>
                      <td>{appointment.name}</td>
                      <td>
                        <time dateTime={appointment.time}>{moment(appointment.time).format('MM/DD/YYYY h:mm a')}</time>
                      </td>
                    </tr>
                  </tbody>
              );
            })
          }
        </table>
      </div>
    );
  }
}

export default App;
