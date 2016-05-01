// hello world
var Fridge = React.createClass({
	getDefaultProps: function(){
		return {
			foods: [
				{name: "orange", timer: 200},
				{name: "apricat", timer: 2000},
				{name: "strawberry", timer: 200}
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
			return (<Food key={food.name} {...food} />)
		});
		var extraFood = React.createElement(Food, {name: "pineapple"});
		return (
			<div>
			<h2>Courtneys Fridge</h2>
			{groceries}
			{extraFood}
			</div>
		)}
	});

	ReactDOM.render(<Fridge />, document.getElementById("app"));
