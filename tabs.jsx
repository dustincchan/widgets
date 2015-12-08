var React = require('react');

var Tabs = React.createClass({
  getInitialState: function() {
    return { currentTabIndex: 0 };
  },

  clickHandler: function() {
    this.state.currentTabIndex =
  },

  render: function () {
    var counter = 0;
    var currentTabIndex = this.state.currentTabIndex;
    var headerNames = this.props.objects.map (function(object) {
      if (counter === currentTabIndex) {
        counter++;
        return (
          <ul onClick={this.clickHandler} value={}>
            <strong>{object.title}</strong>
            <li>{object.content}</li>
          </ul>
        );
      } else {
        counter++;
        return <ul>{object.title}</ul>;
      }
    });

    return (
      <div>
        <header>
          {headerNames}
        </header>
      </div>
    );
  }
});

module.exports = Tabs;
