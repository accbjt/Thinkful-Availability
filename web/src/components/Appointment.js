import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Appointment = props => {
  const { time, advisorId, bookAppointment } = props;

  return (
    <li key={time}>
      <time dateTime={time} className="book-time">
        {moment(time).format('MM/DD/YYYY h:mm a')}
      </time>
      <button
        className="book btn-small btn-primary m-4"
        type="submit"
        onClick={e => bookAppointment(e, { time, advisorId })}
      >
        Book
      </button>
    </li>
  );
};

Appointment.propTypes = {
  time: PropTypes.string.isRequired,
  advisorId: PropTypes.string.isRequired,
  bookAppointment: PropTypes.func.isRequired,
};

export default Appointment;
