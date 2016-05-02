import React from 'react';
import Header from '../presentationals/Header';
import Interaction from './Interaction';
import GridPager from './GridPager';

var App = React.createClass({

	render() {
		const data = this.props.data;

		return (<div className="app-container">
			<Header />

			<div className="app-padder">
				<Interaction {...data} />
				<GridPager {...data} />
			</div>
		</div>);
	}
});

export default App;