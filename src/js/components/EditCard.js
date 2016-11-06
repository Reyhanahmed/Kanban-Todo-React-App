import React, {Component, PropTypes} from 'react';
import {hashHistory} from 'react-router';

class EditCard extends Component{

	componentWillMount(){
		let card = this.props.cards.find((card) => card.id == this.props.params.card_id);
		this.setState({...card});
	}

	handleChange(field, value){
		this.setState({[field]: value});
	}

	handleSubmit(e){
		e.preventDefault();
		this.props.cardCallbacks.updateCard(this.state);
		hashHistory.push('/');
	}

	handleClose(e){
		hashHistory.push('/');
	}

	render(){
		return(
			<CardForm draftCard={this.state}
					  buttonLabel = 'Edit Card' 
					  handleChange={this.handleChange.bind(this)}
					  handleSubmit={this.handleSubmit.bind(this)}
					  handleClose={this.handleClose.bind(this)}
			/>
		);
	}
}

EditCard.propTypes = {
	cardCallbacks: PropTypes.object
}

export default EditCard;