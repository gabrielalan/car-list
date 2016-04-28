import React from 'react';

var Table = React.createClass({

	render() {
		return (<div className="row app-table">
			<div className="col-lg-12">
				<div className="panel panel-default">
					<table className="table table-hover table-bordered">
						<thead>
							<tr>
								<th><input type="checkbox" /></th>
								<th>Placa</th>
								<th>Modelo</th>
								<th>Marca</th>
								<th>Foto</th>
								<th>Combustível</th>
								<th>Valor</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><input type="checkbox" /></td>
								<td>AAA1000</td>
								<td>Gol</td>
								<td>Wolksvagem</td>
								<td>Sem foto</td>
								<td>Gasolina</td>
								<td>20.000,00</td>
							</tr>
							<tr>
								<td><input type="checkbox" /></td>
								<td>AAA1000</td>
								<td>Gol</td>
								<td>Wolksvagem</td>
								<td>Sem foto</td>
								<td>Gasolina</td>
								<td>20.000,00</td>
							</tr>
							<tr>
								<td><input type="checkbox" /></td>
								<td>AAA1000</td>
								<td>Gol</td>
								<td>Wolksvagem</td>
								<td>Sem foto</td>
								<td>Gasolina</td>
								<td>20.000,00</td>
							</tr>
							<tr>
								<td><input type="checkbox" /></td>
								<td>AAA1000</td>
								<td>Gol</td>
								<td>Wolksvagem</td>
								<td>Sem foto</td>
								<td>Gasolina</td>
								<td>20.000,00</td>
							</tr>
							<tr>
								<td><input type="checkbox" /></td>
								<td>AAA1000</td>
								<td>Gol</td>
								<td>Wolksvagem</td>
								<td>Sem foto</td>
								<td>Gasolina</td>
								<td>20.000,00</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>);
	}
});

export default Table;