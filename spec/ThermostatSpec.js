'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('return current temp  20', function() {
    expect(thermostat.GetCurrentTemp()).toEqual(20);
  });

  it('increment', function() {
    thermostat.UpTemp();
    expect(thermostat.GetCurrentTemp()).toEqual(21);
  });

  it('down', function() {
    thermostat.DownTemp();
    expect(thermostat.GetCurrentTemp()).toEqual(19);
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.DownTemp();
    }
    expect(thermostat.GetCurrentTemp()).toEqual(10);
  });

  it('has a maximum of 25 degrees - PSM On', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.UpTemp();
    }
    expect(thermostat.GetCurrentTemp()).toEqual(25);
  });

  it('has a maximum of 32 degrees - PSM Off', function() {
    thermostat.turnPSMOff();
    for (var i = 0; i < 13; i++) {
      thermostat.UpTemp();
    }
    expect(thermostat.GetCurrentTemp()).toEqual(32);
  });

  it('has default powersaving mode', function() {
    expect(thermostat.isPowerSavingModeOn()).toEqual(true);
  })

  it('can turn powersaving mode off', function() {
    thermostat.turnPSMOff();
    expect(thermostat.isPowerSavingModeOn()).toEqual(false);
  })
  it('can turn powersaving mode on', function() {
    thermostat.turnPSMOff();
    thermostat.turnPSMOn();
    expect(thermostat.isPowerSavingModeOn()).toEqual(true);
  })
});
