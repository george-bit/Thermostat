class Thermostat{

    constructor() {
        this.MINIMUM_TEMPERATURE = 10;
        this.temperature = 20;
      }

    GetCurrentTemp(){
        return this.temperature
    }

    UpTemp(){
        this.temperature += 1
    }

    DownTemp(){

        if (this.isMinimumTemperature()) {
            return;
          }

        this.temperature -= 1
    }

    isMinimumTemperature() {
        return this.temperature === this.MINIMUM_TEMPERATURE;
    }

}