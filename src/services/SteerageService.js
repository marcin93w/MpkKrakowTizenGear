export default class SteerageService {
  constructor(onWheelPrevMoved, onWheelNextMoved) {
    this.onWheelPrevMoved = onWheelPrevMoved;
    this.onWheelNextMoved = onWheelNextMoved;
  }
  
  set onWheelPrevMovedCallback(onPrev) {
    this.onWheelPrevMoved = onPrev;
  }

  set onWheelNextMovedCallback(onNext) {
    this.onWheelNextMoved = onNext;
  }

  activate() {
    this.isActive = true;

    document.onkeypress = (event) => {
      if(!this.isActive) {
        return;
      }

      if(event.key === 'w') {
        this.onWheelPrevMoved();
      } else if(event.key === 's') {
        this.onWheelNextMoved();
      }
    };
    
    document.addEventListener("rotarydetent", (ev) => {
      if(!this.isActive) {
        return;
      }

      let direction = ev.detail.direction;
      if(direction === 'CW') {
        this.onWheelNextMoved();
      } else {
        this.onWheelPrevMoved();
      }
    });
  }

  deactivate() {
    this.isActive = false;
  }
}