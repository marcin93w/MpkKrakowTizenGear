import { connect } from 'react-redux'
import { fetchStops, selectPrevStop, selectNextStop } from '../actions/StopsList'
import StopsListComponent from '../components/StopsList'

const mapStateToProps = (state) => {
  let stopsList = state.stopsList;
  let props = {
    isLoading: stopsList.isLoading,
    error: stopsList.error
  }

  let stops = stopsList.stops;
  if (stops && stops.length > 0) {
    let selectedIndex = stopsList.selected || 0;
    
    Object.assign(props, {
      selectedStop: stops[selectedIndex],
      prevStop: selectedIndex > 0 ? stops[selectedIndex-1] : null,
      nextStop: selectedIndex < stops.length-1 ? stops[selectedIndex+1] : null,
      secPrevStop: selectedIndex > 1 ? stops[selectedIndex-2] : null,
      secNextStop: selectedIndex < stops.length-2 ? stops[selectedIndex+2] : null
    });
  }

  return props;
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStops: () => dispatch(fetchStops()),
    onPrevSelected: () => dispatch(selectPrevStop()),
    onNextSelected: () => dispatch(selectNextStop())
  };
}

const StopsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(StopsListComponent)

export default StopsList