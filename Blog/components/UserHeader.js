import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../Actions';

class UserHeader extends React.Component{
    //for first way use this 
    // componentDidMount(){ 
    //    this.props.fetchUser(this.props.userId);
    // }

    render(){
        const {user} = this.props;

        if(!user){
            return null;
        } 
        return <div className="header">{user.name}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
     return {user : state.users.find(user => user.id === ownProps.userId)};
};

export default connect(
    mapStateToProps,
    {fetchUser}
)(UserHeader);