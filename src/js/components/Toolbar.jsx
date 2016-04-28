import React from 'react';

var Header = React.createClass({

	render() {
		return (<div className="row app-toolbar">
			<div className="col-xs-8 col-ls-8 col-lg-8 col-md-8">
				<button className="btn btn-success btn-lg">Novo Carro</button>
				{" "}
				<button className="btn btn-info btn-lg">Editar</button>
				{" "}
				<button className="btn btn-danger btn-lg">Remover</button>
			</div>
			<div className="col-xs-4 col-ls-4 col-lg-4 col-md-4">
				<div className="input-group input-group-lg">
					<input type="text" className="form-control" placeholder="Pesquisar" />
					<span className="input-group-btn">
						<button className="btn btn-grey" type="button"><i className="icon-search"></i></button>
					</span>
				</div>
			</div>
		</div>);
	}
});

export default Header;