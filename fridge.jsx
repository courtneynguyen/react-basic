// heloooo
// stuff
var Fridge = React.createClass({
  getInitialState: function(){
    return {
      open: false,
      refrigerate: true
    }
  },
  render: function(){
    var groceries = this.props.foods.map(function(food, index){
      return (<Food {...food} key={food.name + index} />);
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
      <div>
      <h2>Courtneys Fridge</h2>
      {groceries}
      {extraFood}
      </div>
    );
  }
});
