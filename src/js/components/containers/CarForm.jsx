import React from 'react';
import Modal from '../presentationals/Modal';

var validations = {
	'fuel': (value) => true,
	'image': (value) => true,
	'mark': (value) => value.length > 3,
	'model': (value) => value.length > 2,
	'placa': (value) => value.match(/^[A-z]{3}\-[0-9]{4}$/gi),
	'value': (value) => !value.match(/[^0-9]/gi) && value.length >= 2
};

var CarForm = React.createClass({

	getInitialState() {
		return {
			valid: {
				fuel: true,
				image: true,
				mark: true,
				model: true,
				placa: true,
				value: true
			}
		}
	},

	setValues(values) {
		for( var index in values ) {
			if (!this.refs[index])
				continue;

			this.refs[index].value = values[index];
		}
	},

	isValid() {
		const inputs = this.refs;

		let valid = this.state.valid, isValid = true;

		try {
			for (var index in inputs) {
				let inputValid = validations[index](inputs[index].value);

				if (!inputValid) {
					valid[index] = false;

					isValid = false;
				} else {	
					valid[index] = true;
				}
			}
		} catch(e) {
			console.log(e);
			alert('Desculpe, um erro interno ocorreu, tente novamente mais tarde');
			return false;
		}

		this.setState({ valid });
		return isValid;
	},

	onSave(event) {
		event.preventDefault();

		const valid = this.isValid();

		if (!this.props.onSubmit)
			return false;

		if (valid)
			this.props.onSubmit({
				combustivel: this.refs.fuel.value,
				imagem: this.refs.image.value,
				marca: this.refs.mark.value,
				modelo: this.refs.model.value,
				placa: this.refs.placa.value,
				valor: this.refs.value.value
			});
	},

	verifyError(name) {
		return !this.state.valid[name] ? " has-error" : "";
	},

	makeInputHandler(name) {
		return (event) => {
			let data = this.state.data;

			if (name === 'placa')
				this.refs.placa.value = event.target.value;

			data[name] = event.target.value;

			this.setState({ data });
		}
	},

	render() {
		return (<Modal {...this.props}>
			<form className="form-horizontal" onSubmit={this.onSave}>
				<div className="modal-header">
					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
					<h4 className="modal-title">Informações do carro</h4>
				</div> 
				<div className="modal-body">
						<div className={"form-group" + this.verifyError('fuel')}>
							<label for="fuel" className="col-sm-2 control-label">Combustível</label>
							<div className="col-sm-10">
								<select id="fuel" name="fuel" ref="fuel" className="form-control">
									<option value="Flex">Flex</option>
									<option value="Gasolina">Gasolina</option>
									<option value="Alcool">Álcool</option>
								</select>
							</div>
						</div>

						<div className={"form-group" + this.verifyError('placa')}>
							<label for="placa" className="col-sm-2 control-label">Placa</label>
							<div className="col-sm-10">
								<input type="text" ref="placa" className="form-control" id="placa" placeholder="AAA-9999" maxlength={8} />
							</div>
						</div>

						<div className={"form-group" + this.verifyError('image')}>
							<label for="image" className="col-sm-2 control-label">Imagem</label>
							<div className="col-sm-10">
								<input type="text" ref="image" className="form-control" id="image" placeholder="Imagem" />
							</div>
						</div>

						<div className={"form-group" + this.verifyError('mark')}>
							<label for="mark" className="col-sm-2 control-label">Marca</label>
							<div className="col-sm-10">
								<input type="text" ref="mark" className="form-control" id="mark" placeholder="Marca" />
							</div>
						</div>

						<div className={"form-group" + this.verifyError('model')}>
							<label for="model" className="col-sm-2 control-label">Modelo</label>
							<div className="col-sm-10">
								<input type="text" ref="model" className="form-control" id="model" placeholder="Modelo" />
							</div>
						</div>

						<div className={"form-group" + this.verifyError('value')}>
							<label for="value" className="col-sm-2 control-label">Valor</label>
							<div className="col-sm-10">
								<input type="number" ref="value" className="form-control" id="value" placeholder="Valor" />
							</div>
						</div>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-warning" data-dismiss="modal">Cancelar</button>
					<button type="submit" className="btn btn-primary">Salvar</button>
				</div>
			</form>
		</Modal>);
	}
});

export default CarForm;