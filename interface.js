
$(document).ready(function() {
var thermostat = new Thermostat();
$('#temperature').text('Current Temperature: ' + thermostat.temperature);
});