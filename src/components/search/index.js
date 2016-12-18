import React, { Component } from 'react';
import { connect } from 'react-redux';
import {makeSearchRequest} from './../../actions/search';
import {RaisedButton, TextField} from 'material-ui';
import Message from './message';
import List from './list';

const style = {
	width : 600
}

export class Search extends Component {

	constructor(props){
		super(props);
		this.state = {
			username : null,
			search : []
		}
	}
	
	handleSubmit = (e) => {
		this.props.dispatch(makeSearchRequest({
			username: e.target.value,
		}));
		return false;
	}

	handleUserNameChange = (e) => {
		let username = e.target.value;
  		 this.setState({username: username});
  		 this.handleSubmit(e);
	}
 
	render(){
		let search = this.props.search.search;
		let error = this.props.search.error;
		return (
			<div >
				<h2>Github-Search</h2>
				<TextField hintText="Please enter your username" onChange={this.handleUserNameChange} style={style}/><br />
				<Message search = {search} error = {error} username = {this.state.username} />
				<List search = {search} />
			</div>
		);
	}
}



function mapStateToProps(state, ownProps){
	return {
		search : state.search
	}
}

export default connect(mapStateToProps)(Search);