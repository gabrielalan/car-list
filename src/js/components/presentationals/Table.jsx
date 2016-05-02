import React from 'react';
import Checkbox from './Checkbox';
import numeral from 'numeral';
import numeralPtBr from 'numeral/languages/pt-br';

numeral.language('pt-br', numeralPtBr);
numeral.language('pt-br');

var Table = React.createClass({

	onChange(checked, value) {
		const onSelect = this.props.onSelect;

		if (onSelect)
			onSelect(checked, value);
	},

	renderImage(url) {
		if (!url)
			return <span>Sem foto</span>;

		return (<a href={url} className="app-image-link" target="_blank">Imagem</a>);
	},

	renderLines() {
		let list = this.props.list || [];

		return list.map(current => {
			return (<tr key={current.placa}>
				<td><Checkbox onChange={this.onChange} checked={current.selected} value={current.placa} /></td>
				<td>{current.placa}</td>
				<td>{current.modelo}</td>
				<td>{current.marca}</td>
				<td>{this.renderImage(current.imagem)}</td>
				<td>{current.combustivel}</td>
				<td>{numeral(current.valor).format('0,0.00')}</td>
			</tr>)
		});
	},

	render() {
		return (<div className="row app-table">
			<div className="col-lg-12">
				<div className="panel panel-default">
					<table className="table table-hover table-bordered">
						<thead>
							<tr>
								<th><Checkbox onChange={this.onChange} checked={this.props.allSelected} value="ALL" /></th>
								<th>Placa</th>
								<th>Modelo</th>
								<th>Marca</th>
								<th>Foto</th>
								<th>Combustível</th>
								<th>Valor</th>
							</tr>
						</thead>
						<tbody>
							{this.renderLines()}
						</tbody>
					</table>
				</div>
			</div>
		</div>);
	}
});

export default Table;