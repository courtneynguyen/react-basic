// main class..

var foods = [
  {name: "orange", timer: 200},
  {name: "apricat", timer: 2000},
  {name: "strawberry", timer: 200}
];

ReactDOM.render(<Fridge foods={foods} />, document.getElementById("app"));
