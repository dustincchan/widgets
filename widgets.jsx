var React = require('react'),
    ReactDOM = require('react-dom'),
    // AutoComplete = require('./autocomplete');
    WeatherClock = require('./weatherClock');

// var names = ["Claire", "Dustin", "Jeff", "Jed", "Jefferson"];

document.addEventListener("DOMContentLoaded", function () {
  // ReactDOM.render(<AutoComplete names={ names }/>, document.getElementById('root'));
  ReactDOM.render(<WeatherClock/>, document.getElementById('root'));
});
