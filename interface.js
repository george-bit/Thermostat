
$(document).ready(function() {
var thermostat = new Thermostat();
updateTemperature();

$('#temperature-up').on('click', function(){
  thermostat.upTemp();
  updateTemperature();
})

$('#temperature-down').on('click', function(){
  thermostat.downTemp();
  updateTemperature();
})

$('#temperature-reset').on('click', function(){
  thermostat.reset();
  updateTemperature();
})

$('#powersaving-on').on('click', function(){
  thermostat.turnPSMOn();
  thermostat.reset();
  updateTemperature();
  $('#power-saving-status').text('on');
})

$('#powersaving-off').on('click', function(){
  thermostat.turnPSMOff();
  $('#power-saving-status').text('off');
})

function updateTemperature() {
  $('#temperature').text('Current Temperature: ' + thermostat.temperature);
  $('#temperature').attr('class', thermostat.usage());
};
})
