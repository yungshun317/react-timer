import createReactClass from "create-react-class";
import React from "react";
import ReactDom from "react-dom";

/* [1] `React.createClass`` has been deprecated so we have to use the create-react-class package
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
*/

// [2] `React.Component``
class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { counter: this.props.initialSeconds };
	}
	componentDidMount() {
		let currentCounter;
		this.timerId = setInterval(() => {
			currentCounter = this.state.counter;
			if (currentCounter === 1) {
				clearInterval(this.timerId);
			}
			this.setState({ counter: currentCounter - 1 });
		}, 1000);
	}
	render() {
		return (
			<div>{this.state.counter}</div>
		);
	}
}

ReactDom.render(
	<Timer initialSeconds={36} />,
	document.getElementById("react")
);