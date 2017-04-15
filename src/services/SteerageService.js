export default class SteerageService {
  constructor(onWheelPrevMoved, onWheelNextMoved, onBackPressed) {
    this.onWheelPrevMoved = onWheelPrevMoved;
    this.onWheelNextMoved = onWheelNextMoved;
    this.onBackPressed = onBackPressed;
  }
  
  set onWheelPrevMovedCallback(onPrev) {
    this.onWheelPrevMoved = onPrev;
  }

  set onWheelNextMovedCallback(onNext) {
    this.onWheelNextMoved = onNext;
  }

  set onBackPressedCallback(onBackPress) {
    this.onBackPressed = onBackPress;
  }

  activate() {
    this.isActive = true;
    this.activateWheelSteering();
    this.activateBackButton();
    this.activateDebugKeyboardSteering();
  }

  activateWheelSteering() {
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

  activateBackButton() {
    document.addEventListener('tizenhwkey', (e) => {
      if(!this.isActive) {
        return;
      }
      if(e.keyName === "back") {
        this.onBackPressed();
      }
    }); 
  }

  activateDebugKeyboardSteering() {
    document.onkeypress = (event) => {
      if(!this.isActive) {
        return;
      }

      if(event.key === 'w') {
        this.onWheelPrevMoved();
      } else if(event.key === 's') {
        this.onWheelNextMoved();
      } else if(event.key === 'q') {
        this.onBackPressed();
      }
    };
  }

  deactivate() {
    this.isActive = false;
  }
}