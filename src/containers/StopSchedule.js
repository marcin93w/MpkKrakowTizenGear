import { connect } from 'react-redux'
import StopScheduleComponent from '../components/StopSchedule'
import { fetchSchedule } from '../actions/StopSchedule'

const mapStateToProps = (state) => {
  return state.departures || {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitialize: (stopGroupId) => {
      dispatch(fetchSchedule(stopGroupId));
    }
  }
}


const StopSchedule = connect(
  mapStateToProps,
  mapDispatchToProps
)(StopScheduleComponent)

export default StopSchedule