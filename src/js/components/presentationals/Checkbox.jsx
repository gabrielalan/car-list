import React from 'react';

var Checkbox = React.createClass({

	onClick() {
		let onChange = this.props.onChange;

		if (onChange)
			onChange(!Boolean(this.props.checked), this.props.value);
	},

	render() {
		let checked = Boolean(this.props.checked);

		return (<div className="app-checkbox">
			<input type="checkbox" checked={checked} value={this.props.value} />
			<div className={"app-checkbox-wrap" + (checked ? " checked" : "")} onClick={this.onClick}>
				<svg x="0px" y="0px" width="17.25px" height="14.75px"><path fill="#385A7B" id="check" d="M4.438,6.166l2.197,2.197l5.896-5.896l2.261,2.261l-8.334,8.333L2.042,8.645L4.438,6.166z"/></svg>
			</div>
		</div>);
	}
});

export default Checkbox;