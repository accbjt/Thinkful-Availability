import { combineReducers } from 'redux';

import availabilities from './containers/AdvisorAvailabilityContainer/reducer';
import name from './containers/NameFormContainer/reducer';
import appointments from './containers/AppointmentContainer/reducer';

export default combineReducers({
  availabilities,
  name,
  appointments,
});
