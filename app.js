var Fridge = React.createClass({displayName: "Fridge",
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