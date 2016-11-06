import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import KanbanBoardContainer from './components/KanbanBoardContainer';
import KanbanBoard from './components/KanbanBoard';
import EditCard from './components/EditCard';
import NewCard from './components/NewCard';



ReactDOM.render((
	<Router history={hashHistory}>
		<Route component={KanbanBoardContainer}>
			<Route path='/' component={KanbanBoard}>
				<Route path='new' component={NewCard}/>
				<Route path='edit/:card_id' component={EditCard}/>
			</Route>
		</Route>
	</Router>
), document.getElementById('app'));