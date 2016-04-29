var Food = React.createClass({displayName: "Food",
  getDefaultProps: function(){
    return {
      name: "apple",
      timer: 10
    };
  },
  getInitialState: function(){
    // should call services here to populate
    var that = this;
    var actualTimer = window.setInterval(function(){
      that.decrementTimer();
    }, 1000);
    return {
      timer: that.props.timer,
      style: {
        "color": "black"
      },
      actualTimer: actualTimer
    }
  },
  componentWillMount: function(){
    //
  },
  componentDidMount: function(){

  },
  componentWillReceiveProps: function(){

  },
  componentWillUpdate: function(){

  },
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("h3", null, this.props.name, " ", React.createElement("em", {style: this.state.style}, this.state.timer))
      )
    );
  },
  componentDidUpdate: function(){

  },
  componentWillUnmount: function(){

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

var Fridge = React.createClass({displayName: "Fridge",
  getDefaultProps: function(){
    return {
      foods: [{name: "orange", timer: 200},{name: "strawberry", timer: 200}
      ]
    };
  },
  getInitialState: function(){
    return {
      open: false,
      refrigerate: true
    }
  },
  render: function(){
    var groceries = this.props.foods.map(function(food){
      return (React.createElement(Food, React.__spread({key: food.name},  food)))
    });
    var extraFood = React.createElement(Food, {name: "pineapple"});
    return (
    React.createElement("div", null, 
      React.createElement("h2", null, "Courtneys Fridge"), 
      groceries, 
      extraFood
    )
  )}
});

ReactDOM.render(React.createElement(Fridge, null), document.getElementById("app"));