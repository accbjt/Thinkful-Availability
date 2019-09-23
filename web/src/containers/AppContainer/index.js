import { connect } from 'react-redux';
import {
  getAvailabilities,
  getToday,
} from '../AdvisorAvailabilityContainer/actions';
import { getAppointments } from '../AppointmentContainer/actions';
import App from '../../App';

const mapStateToProps = ({ availabilities, appointments }) => ({
  today: availabilities.today,
  appointments,
});

const mapDispatchToProps = dispatch => ({
  fetchAvailabilities: () => {
    dispatch(getAvailabilities());
    dispatch(getToday());
    dispatch(getAppointments());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
