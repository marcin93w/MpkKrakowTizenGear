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
    let selectedIndex =stopsList.selected || 0;
    
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
  initialize(dispatch);
  return {}
}

function initialize(dispatch) {
  dispatch(fetchStops());

  let onPrevSelected = () => dispatch(selectPrevStop());
  let onNextSelected = () => dispatch(selectNextStop());
  addKeyboradStering(onPrevSelected, onNextSelected);
  addTizenWheelStering(onPrevSelected, onNextSelected);
}

function addKeyboradStering(onPrevSelected, onNextSelected) {
  document.onkeypress = (event) => {
    if(event.key === 'w') {
      onPrevSelected();
    } else if(event.key === 's') {
      onNextSelected();
    }
  }
}

function addTizenWheelStering(onPrevSelected, onNextSelected) {
  document.addEventListener("rotarydetent", (ev) => {
    let direction = ev.detail.direction;
    if(direction === 'CW') {
      onNextSelected();
    } else {
      onPrevSelected();
    }
  });
}

const StopsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(StopsListComponent)

export default StopsList