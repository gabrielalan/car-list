import React from 'react';

var Header = React.createClass({

	handler(handler) {
		return event => {
			event.preventDefault();

			if (!handler)
				return false;

			handler(this.refs.search.value);

			return false;
		};
	},

	render() {
		const editDisabled = this.props.editDisabled;
		const removeDisabled = this.props.removeDisabled;

		return (<div className="row app-toolbar">
			<div className="col-xs-8 col-ls-8 col-lg-8 col-md-8">
				<button className="btn btn-success btn-lg" onClick={this.handler(this.props.onAdd)}>Novo Carro</button>
				{" "}
				<button className={"btn btn-info btn-lg" + (editDisabled ? " disabled" : "")} disabled={editDisabled} onClick={this.handler(this.props.onEdit)}>Editar</button>
				{" "}
				<button className={"btn btn-danger btn-lg" + (removeDisabled ? " disabled" : "")} disabled={removeDisabled} onClick={this.handler(this.props.onRemove)}>Remover</button>
			</div>
			<div className="col-xs-4 col-ls-4 col-lg-4 col-md-4">
				<form action="#" onSubmit={this.handler(this.props.onSearch)}>
					<div className="input-group input-group-lg">
						<input type="text" className="form-control" ref="search" placeholder="Pesquisar" />
						<span className="input-group-btn">
							<button className="btn btn-grey" type="submit"><i className="icon-search"></i></button>
						</span>
					</div>
				</form>
			</div>
		</div>);
	}
});

export default Header;