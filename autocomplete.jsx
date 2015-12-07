var React = require('react');

var AutoComplete = React.createClass({
  getInitialState: function() {
    return { lettersEntered: "" };
  },

  addLetter: function(event) {
    this.setState({lettersEntered: event.target.value});
  },

  render: function() {
    var lettersEntered = this.state.lettersEntered;

    return (
      <div>
        <label>Enter a name:
          <input type="text" onChange={this.addLetter} value={this.state.lettersEntered}></input>
        </label>
        <ul>
          {
            this.props.names.map ( function(name) {

              if (name.toLowerCase().slice(0, lettersEntered.length) === lettersEntered.toLowerCase()) {
                var li = name;
              } else {
                var li = "";
              }
              return <li>{li}</li>
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = AutoComplete;
