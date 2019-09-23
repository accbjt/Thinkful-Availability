import React from 'react';
import { shallow } from 'enzyme';

import Appointment from './components/Appointment';

it('renders without crashing', () => {
  const time = '2019-08-24T10:30:00-04:00';
  const component = shallow(
    <Appointment time={time} advisorId="1234" bookAppointment={() => {}} />,
  );

  expect(component).toMatchSnapshot();
});
