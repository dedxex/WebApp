import React,{Component}  from 'react';
import {connect } from 'react-redux';
import * as actions from '../actions';

export class UserList extends Component {
    componentWillMount() {
       this.props.fetchUser();
    }
    renderUser(user){
        return(
            <div className="card card-block">
            <div className="card-title">{user.name}</div>
            <div className="card-text">Chees Factory</div>
            <a className="btn btn-primary">Email</a>
            </div>
        );
    }
    render() {
        console.log(state);
        return(
            <div>{this.props.users.map(this.renderUser)}</div>
        );
    }
}

function mapStateToProps(state){
    console.log(state);
    return { users : state.users };
}
export default connect(mapStateToProps, actions)(UserList);