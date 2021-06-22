import React  from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from '../Actions';

class PostList extends React.Component{
    componentDidMount() {
        this.props.fetchPosts();
    }
    render(){
        return <div>Post list</div>;
    }
}

export default connect(
    null,
    {fetchPosts}
)(PostList);