import createReactClass from "create-react-class";
import React from "react";
import ReactDom from "react-dom";

var Timer = createReactClass({
	getInitialState: function() {
		return { counter: this.props.initialSeconds };
	},
	componentDidMount: function() {
		this.setState({ counter: this.props.initialSeconds })
	},
	render: function() {
		return <div>{this.state.counter}</div>;
	}
});

ReactDom.render(
	<Timer initialSeconds={36} />,
	document.getElementById("react")
);