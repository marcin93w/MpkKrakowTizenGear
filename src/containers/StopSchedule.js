import { connect } from 'react-redux'
import StopScheduleComponent from '../components/StopSchedule'
import { fetchSchedule } from '../actions/StopSchedule'

const mapStateToProps = (state) => {
  let departuresState = state.departures;
  let props = {
    isLoading: departuresState.isLoading,
    error: departuresState.error
  }

  if(departuresState.departures && departuresState.departures.length > 0) {
    let departures = departuresState.departures.map(d => ({
        lineName: d.lineName,
        destination: d.destination,
        departureTime: Math.round(((new Date(d.departureTime) - new Date()) / (1000*60)) + new Date().getTimezoneOffset())
    }));
    departures.sort((a,b) => a.departureTime - b.departureTime);
    props.departures = departures.filter(dep => dep.departureTime > -20);
  }
  
  return props;
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