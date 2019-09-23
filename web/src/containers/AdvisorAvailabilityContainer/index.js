import { connect } from 'react-redux';

import AdvisorAvailability from '../../components/AdvisorAvailability';

const mapStateToProps = (state) => {
  const { availabilities } = state;

  return {
    availabilities: availabilities.advisorTimes,
  };
};

export default connect(mapStateToProps)(AdvisorAvailability);
