class Thermostat{

    constructor() {
        this.MINIMUM_TEMPERATURE = 10;
        this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
        this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
        this.temperature = 20;
        this.powerSavingMode = true;
      }

    GetCurrentTemp(){
        return this.temperature
    }

    UpTemp(){
      if (this.isMaxTemperature()) {
          return;
        }
        this.temperature += 1
    }

    DownTemp(){

        if (this.isMinimumTemperature()) {
            return;
          }

        this.temperature -= 1
    }

    turnPSMOff(){
      this.powerSavingMode = false;
    }
    turnPSMOn(){
      this.powerSavingMode = true;
    }

    isMinimumTemperature() {
        return this.temperature === this.MINIMUM_TEMPERATURE;
    }

    isMaxTemperature() {
      if (this.isPowerSavingModeOn === false){
        return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_OFF
      }
      return this.temperature === this.MAXIMUM_TEMPERATURE_PSM_ON
    }
    isPowerSavingModeOn() {
      return this.powerSavingMode === true;
    }


}
