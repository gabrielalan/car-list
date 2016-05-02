import React from 'react';
import store from '../../state/store';
import { setPage } from '../../actions';

var Table = React.createClass({

	handler(page) {
		return (event) => {
			event.preventDefault();
			store.dispatch(setPage(page));
			return false;
		}
	},

	renderPage(page) {
		let current = this.props.page, active = current === page, handler = active ? () => null : this.handler(page);

		return <li key={page} className={active ? "active" : ""}><a href="#" onClick={handler}>{page}</a></li>;
	},

	renderPages() {
		let lis = [];

		for (let i = 1; i <= this.props.pages; i++) {
			lis.push(this.renderPage(i));
		};

		return lis;
	},

	renderToFirst() {
		const disabled = 1 === this.props.page, handler = disabled ? () => null : this.handler(1);

		return (<li className={disabled ? "disabled" : ""}>
			<a href="#" aria-label="First" onClick={handler}>
				<span aria-hidden="true">&laquo;</span>
			</a>
		</li>);
	},

	renderToLast() {
		const disabled = this.props.pages === this.props.page, handler = disabled ? () => null : this.handler(this.props.pages);

		return (<li className={disabled ? "disabled" : ""}>
			<a href="#" aria-label="Last" onClick={handler}>
				<span aria-hidden="true">&raquo;</span>
			</a>
		</li>);
	},

	render() {
		return (<div className="text-center app-pagination">
			<nav>
				<ul className="pagination pagination-lg">
					{this.renderToFirst()}
					{this.renderPages()}
					{this.renderToLast()}
				</ul>
			</nav>
		</div>);
	}
});

export default Table;