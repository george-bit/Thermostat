
$(document).ready(function() {
var thermostat = new Thermostat();
$('#temperature').text('Current Temperature: ' + thermostat.temperature);
$('#temperature-up').on('click', function(){
  thermostat.upTemp();
  $('#temperature').text('Current Temperature: ' + thermostat.temperature);
})
$('#temperature-down').on('click', function(){
  thermostat.downTemp();
  $('#temperature').text('Current Temperature: ' + thermostat.temperature);
})
})
