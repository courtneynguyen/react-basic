// hello world
var Food = React.createClass({
  getDefaultProps: function(){
    return {
      name: "apple",
      timer: 10
    }
  },
  getInitialState: function(){
    // should call services here to populate
    var that = this;
    var actualTimer = window.setInterval(function(){
      that.decrementTimer();
    }, 1000);
    return {
      timer: this.props.timer,
      style: {
        "color": "black"
      },
      actualTimer: actualTimer
    }
  },
  componentWillMount: function(){

  },
  render: function(){
    return (
      <div>
      <h3>{this.props.name} <em style={this.state.style}>{this.state.timer}</em></h3>
      </div>
    );
  },
  decrementTimer: function(){
    var newTime = this.state.timer-1;
    if(newTime <= 0){
      someColor = "red";
      clearInterval(this.state.actualTimer);
    }
    else{
      someColor = "black";
    }

    this.setState({
      timer: newTime,
      style: {
        color: someColor
      }
    });
  }
});
