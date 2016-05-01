// hello

var fridgeProps = {
  foods: [
	  {name: "orange", timer: 200},
	  {name: "apricat", timer: 2000},
	  {name: "strawberry", timer: 200}
  ]
};
ReactDOM.render(React.createElement(Fridge, fridgeProps), document.getElementById("app"));
