import React from 'react';
import PropTypes from 'prop-types';

import AppointmentContainer from '../containers/AppointmentContainer';

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
        {availabilities &&
          Object.keys(availabilities).map(advisorId => {
            const times = availabilities[advisorId];

            return (
              <tr key={advisorId}>
                <td>{advisorId}</td>
                <td>
                  <ul className="list-unstyled">
                    {times.sort().map(time => {
                      return (
                        <AppointmentContainer
                          key={time}
                          time={time}
                          advisorId={advisorId}
                        />
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

AdvisorAvailability.propTypes = {
  availabilities: PropTypes.object,
};

AdvisorAvailability.defaultProps = {
  availabilities: {},
};

export default AdvisorAvailability;
