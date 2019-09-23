import { connect } from 'react-redux';

import AdvisorAvailability from '../../components/AdvisorAvailability';

const mapStateToProps = ({ availabilities }) => {
  return {
    availabilities: availabilities.advisorTimes,
  };
};

export default connect(mapStateToProps)(AdvisorAvailability);
