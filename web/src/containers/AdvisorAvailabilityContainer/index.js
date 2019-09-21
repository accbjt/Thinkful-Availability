import { connect } from 'react-redux';

import AdvisorAvailability from '../../components/AdvisorAvailability';

const mapStateToProps = ({ availabilities }) => {
  return {
    availabilities,
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvisorAvailability);
