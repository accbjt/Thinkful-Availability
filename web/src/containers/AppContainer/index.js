import { connect } from 'react-redux';
import { fetchAvailabilities } from '../AdvisorAvailabilityContainer/actions';
import App from '../../App';

const mapStateToProps = ({ availabilities }) => ({
  availabilities,
});

const mapDispatchToProps = dispatch => ({
  fetchAvailabilities: () => dispatch(fetchAvailabilities()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
