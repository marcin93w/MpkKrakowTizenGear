import { connect } from 'react-redux'
import { } from '../actions'
import StopsListComponent from '../components/StopsList'

const mapStateToProps = (state) => {
  return {
    stops: state.stopsList.stops
  }
}

const mapDispatchToProps = (dispatch) => {
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