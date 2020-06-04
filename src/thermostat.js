class Thermostat{


    constructor() {
        this.LOW_USAGE_LIMIT = 18;
        this.DEFAULT_TEMP = 20;
        this.MINIMUM_TEMPERATURE = 10;
        this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
        this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
        this.temperature = this.DEFAULT_TEMP;
        this.powerSavingMode = true;
      }

    getCurrentTemp(){
        return this.temperature
    }

    upTemp(){
      if (this._isMaxTemperature()) {
          return;
        }
        this.temperature += 1
    }

    downTemp(){

        if (this._isMinimumTemperature()) {
            return;
          }
        this.temperature -= 1
    }

    isPowerSavingModeOn() {
      return this.powerSavingMode === true;
    }

    turnPSMOff(){
      this.powerSavingMode = false;
    }
    turnPSMOn(){
      this.powerSavingMode = true;
    }

    reset() {
        this.temperature = this.DEFAULT_TEMP
    }

    usage(){

        if(this.temperature < this.LOW_USAGE_LIMIT){
            return 'low-usage';
        }
        if(this.temperature >= this.LOW_USAGE_LIMIT && this.temperature <= this.MAXIMUM_TEMPERATURE_PSM_ON){
            return 'medium-usage';
        }
        return 'high-usage';
    }



    _isMinimumTemperature() {
        return this.temperature === this.MINIMUM_TEMPERATURE;
    }

    _isMaxTemperature() {
      if (this.isPowerSavingModeOn() === false){
        return this.temperature >= this.MAXIMUM_TEMPERATURE_PSM_OFF
      }
      return this.temperature >= this.MAXIMUM_TEMPERATURE_PSM_ON
    }

}
