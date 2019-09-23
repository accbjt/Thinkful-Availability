import { connect } from 'react-redux';
import { ADD_NAME } from './constants';

import NameForm from '../../components/NameForm';

const mapStateToProps = ({ name }) => {
  return {
    name,
  };
};

const mapDispatchToProps = dispatch => ({
  addName: e => {
    dispatch({ type: ADD_NAME, name: e.target.value });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NameForm);
