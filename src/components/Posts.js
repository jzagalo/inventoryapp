import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost} from "../actions/postActions";


class Posts extends Component {

    componentDidMount(){
        this.props.fetchPost();
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
         if(nextProps.newPost){
             this.props.posts.unshift(nextProps.newPost);
         }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.id}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>
                    Posts
                </h1>
                {postItems}
            </div>

        )
    }
}


const mapStateToProps = state =>({
   posts: state.posts.items,
   newPost: state.posts.item
});
export default connect(mapStateToProps,{ fetchPost })(Posts);