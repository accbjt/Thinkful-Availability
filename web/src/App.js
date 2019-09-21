import React, { Component } from 'react';
import moment from 'moment';

import AdvisorAvailabilityContainer from './containers/AdvisorAvailabilityContainer';

const today = moment(new Date()).format('MM/DD/YYYY');

class App extends Component {
  componentDidMount() {
    this.props.fetchAvailabilities();
  }

  render() {
    return (
      <div className="App container">
        <h1>Book Time with an Advisor</h1>

        {today && <span id="today">Today is {today}.</span>}

        <form id="name-form" className="col-md-6">
          <div className="form-group">
            <label htmlFor="name-field">Your Name</label>
            <input type="text" id="name-field" className="form-control" />
          </div>
        </form>

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
          <tbody>
            <tr>
              <td>36232</td>
              <td>John Smith</td>
              <td>
                <time dateTime="2019-04-03T10:00:00-04:00">4/3/2019 10:00 am</time>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
