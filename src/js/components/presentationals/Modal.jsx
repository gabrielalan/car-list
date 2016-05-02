import React from 'react';

var Modal = React.createClass({

	hide() {
		this.getContainer().modal('hide');
	},

	show() {
		this.getContainer().modal(this.props.options);
	},

	setEvents(events) {
		for (var index in events) {
			this.getContainer()
				.on(index, events[index]);
		}
	},

	componentWillReceiveProps(newProps){
		if (newProps.events)
			this.setEvents(newProps.events);

		if (newProps.show)
			this.show();
		else
			this.hide();
	},

	getContainer() {
		return $(this.refs.container);
	},

	render(){
		return (
			<div ref="container" className={"modal " + this.props.className} tabIndex="-1">
				<div className="modal-dialog">
					<div className="modal-content">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
});

export default Modal;