import React from 'react';

var Header = React.createClass({

	render() {
		return (<nav className="navbar navbar-default navbar-blue">
			<div className="navbar-header">
				<a className="navbar-brand" href="#">
					<i className="icon-logo" />
				</a>
			</div>
		</nav>);
	}
});

export default Header;