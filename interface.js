
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
  $('#temperature').text('Indoor Temperature: ' + thermostat.temperature + '°C');
  $('#temperature').attr('class', thermostat.usage());
};

$.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#outdoor-temperature').text(data.main.temp);
})

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#outdoor-temperature').text(data.main.temp);
  })
})
})
