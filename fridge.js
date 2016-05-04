// stuff
var Fridge = React.createClass({displayName: "Fridge",
  getInitialState: function(){
    return {
      open: false,
      refrigerate: true
    }
  },
  render: function(){
    var groceries = this.props.foods.map(function(food, index){
      return (React.createElement(Food, React.__spread({},  food, {key: food.name + index})));
    });
    var food = {
      name: "pineapple", timer: 100
    };
    var extraFood = React.createElement(Food, {food});
    console.log("createElement:");
    console.log(typeof extraFood);
    console.log("Food:");
    console.log(typeof Food);
    return (
      React.createElement("div", null, 
      React.createElement("h2", null, "Courtneys Fridge"), 
      groceries, 
      extraFood
      )
    );
  }
});