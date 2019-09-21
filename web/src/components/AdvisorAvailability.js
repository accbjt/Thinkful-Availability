import React from 'react';
import moment from 'moment';

const AdvisorAvailability = props => {
  const { availabilities } = props;

  return (
    <table className="advisors table">
      <thead>
        <tr>
          <th>Advisor ID</th>
          <th>Available Times</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(availabilities).map(advisorId => {
          const times = availabilities[advisorId];

          return (
            <tr key={advisorId}>
              <td>{advisorId}</td>
              <td>
                <ul className="list-unstyled">
                  {times.sort().map(time => {
                    return (
                      <li key={time}>
                        <time dateTime={time} className="book-time">
                          {moment(time).format('MM/DD/YYYY h:mm a')}
                        </time>
                        <button
                          className="book btn-small btn-primary"
                          type="submit"
                        >
                          Book
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AdvisorAvailability;
