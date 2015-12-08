var React = require('react'),
    ReactDOM = require('react-dom'),
    Tabs = require('./tabs');
    // AutoComplete = require('./autocomplete');
    // WeatherClock = require('./weatherClock');


// var names = ["Claire", "Dustin", "Jeff", "Jed", "Jefferson"];
var objects = [{title: "title1", content: "content1"},
               {title: "title2", content: "content2"},
               {title: "title3", content: "content3"}];

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Tabs objects={ objects }/>, document.getElementById('root'));
  // ReactDOM.render(<AutoComplete names={ names }/>, document.getElementById('root'));
  // ReactDOM.render(<WeatherClock/>, document.getElementById('root'));
});
