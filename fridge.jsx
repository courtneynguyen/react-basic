// heloooo
// stuff
var Fridge = React.createClass({
	displayName: "Fridge",
	getInitialState: function(){
		return {
			open: false,
			refrigerate: true
		}
	},
	render: function(){
		var groceries = this.props.foods.map(function(food){
			return (<Food {...food} />);
		});
		var extraFood = React.createElement(Food, {name: "pineapple"});
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
