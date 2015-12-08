var React = require('react');

var WeatherClock = React.createClass({
  getInitialState: function() {
    return { time: new Date() }
  },

  componentDidMount: function() {
    this.timer = setInterval(this.tick, 1000);

    var assignLatAndLong = function(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    }.bind(this);

    navigator.geolocation.getCurrentPosition(assignLatAndLong);
    this.getWeather();
  },

  getWeather: function() {
    var request = new XMLHttpRequest();
    request.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=37.78&lon=-122.411&appid=645c5d39c7603f17e23fcaffcea1a3c1", false);
    request.send();
    var response;
    this.req = JSON.parse(request.responseText);
    this.temp = this.req.wind["deg"];
    this.weather = this.req.weather[0].description;
  },

  tick: function(){
    this.setState({time: new Date()});
  },

  componentWillUnmount: function(){
    clearInterval(this.timer);
  },

  render: function() {
    var celsius = this.temp - 273.15;
    return(
      <div>
        Time: {this.state.time.toTimeString()}
        <br></br>
        Temperature (celsius): {celsius}
        <br></br>
        Weather: {this.weather}
      </div>
    );
  }

});

module.exports = WeatherClock;
