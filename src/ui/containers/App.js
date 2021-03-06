import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../api/actionCreators.js';
import Layout from '../components/Layout.js';

const mapStateToProps = (state) => ({
  mapbox: state.mapbox,
});

const mapDispachToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const App = connect(mapStateToProps, mapDispachToProps)(Layout);

export default App;