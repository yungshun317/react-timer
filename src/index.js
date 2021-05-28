import createReactClass from "create-react-class";
import React from "react";
import ReactDom from "react-dom";

var Timer = createReactClass({
	getInitialState: function() {
		return { counter: this.props.initialSeconds };
	},
	componentDidMount: function() {
		var component = this, currentCounter;
		component.timerId = setInterval(function() {
			currentCounter = component.state.counter;
			if (currentCounter === 1) {
				clearInterval(component.timerId);
			}
			component.setState({ counter: currentCounter - 1 });
		}, 1000);
	},
	render: function() {
		return <div>{this.state.counter}</div>;
	}
});

ReactDom.render(
	<Timer initialSeconds={36} />,
	document.getElementById("react")
);