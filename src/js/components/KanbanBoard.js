import React, {Component, PropTypes} from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {Link} from 'react-router';
import List from './List';

class KanbanBoard extends Component{
	render(){
		let cardModal = this.props.children && React.cloneElement(this.props.children, {
			cards: this.props.cards,
			cardCallbacks: this.props.cardCallbacks
		});
		return(
			<div className="app">	
				<Link to='/new' className='float-button'>+</Link>
				<List id="todo" taskCallbacks={this.props.taskCallbacks} title="To Do" 
					cardCallbacks={this.props.cardCallbacks}
					cards={this.props.cards.filter((card) => card.status === 'todo')
				} />

				<List id="in-progress" taskCallbacks={this.props.taskCallbacks} title="In Progress" 
					cardCallbacks={this.props.cardCallbacks}
					cards={this.props.cards.filter((card) => card.status === 'in-progress')
				} />

				<List id="done" taskCallbacks={this.props.taskCallbacks} title="Done" 
					cardCallbacks={this.props.cardCallbacks}
					cards={this.props.cards.filter((card) => card.status === 'done')
				} />
				{cardModal}
			</div>
		);
	}
}

KanbanBoard.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.object),
	taskCallbacks: PropTypes.object,
	cardCallbacks: PropTypes.object
};

export default DragDropContext(HTML5Backend)(KanbanBoard);