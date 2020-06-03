'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('return current temp  20', function() {
    expect(thermostat.GetCurrentTemp()).toEqual(20);
  });

  it('Up', function() {
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

  it('has default powersaving mode on', function() {
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

  it('reset temperature to default', function() {
    thermostat.reset();
    expect(thermostat.GetCurrentTemp()).toEqual(20);
  })

  it('low usage', function() {
    thermostat.turnPSMOff();

    for (var i = 0; i < 3; i++) {
      thermostat.DownTemp();
    }
    expect(thermostat.Usage()).toEqual('Low - Usage');
  });


  it('medimum usage', function() {
    thermostat.turnPSMOff();

    for (var i = 0; i < 5; i++) {
      thermostat.UpTemp();
    }
    expect(thermostat.Usage()).toEqual('Medium - Usage');
  });


  it('High usage', function() {
    thermostat.turnPSMOff();

    for (var i = 0; i < 6; i++) {
      thermostat.UpTemp();
    }
    expect(thermostat.Usage()).toEqual('High - Usage');
  });



});
