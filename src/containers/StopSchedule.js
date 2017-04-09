import { connect } from 'react-redux'
import { fetchStops, selectPrevStop, selectNextStop } from '../actions'
import StopScheduleComponent from '../components/StopSchedule'

const mapStateToProps = (state) => {
  let props = {
  }
  return props;
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


const StopSchedule = connect(
  mapStateToProps,
  mapDispatchToProps
)(StopScheduleComponent)

export default StopSchedule