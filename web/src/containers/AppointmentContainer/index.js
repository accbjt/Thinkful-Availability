import { connect } from 'react-redux';

import Appointment from '../../components/Appointment';
import { postAppointment } from './actions';

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
  };
};

const mapDispatchToProps = dispatch => ({
  bookAppointment: (e, booking) => {
    e.preventDefault();

    dispatch(postAppointment(booking));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Appointment);
