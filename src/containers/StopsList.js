import { connect } from 'react-redux'
import { fetchStops } from '../actions'
import StopsListComponent from '../components/StopsList'

const mapStateToProps = (state) => {
  return state.stopsList;
}

const mapDispatchToProps = (dispatch) => {
  dispatch(fetchStops(20,50));
  return {
    onStopClick: (id) => {
      //dispatch(toggleTodo(id))
    }
  }
}

const StopsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(StopsListComponent)

export default StopsList