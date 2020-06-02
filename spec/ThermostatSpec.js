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

});