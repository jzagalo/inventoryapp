import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from './../actions/postActions';


class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        console.log(this.props);
    }

    onChange(event){
        this.setState({ [event.target.name] : event.target.value });
    }

    onSubmit(event){
        event.preventDefault();
        const posts = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.createPost(posts);
    }

    render() {
        return (
            <div>
                <h1> Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>
                            Title
                        </label>
                        <input  type="text" name="title"
                                value={this.state.title }
                        onChange={this.onChange} />

                    </div>
                    <br/>
                    <div>
                        <label>
                            Title
                        </label>
                        <textarea name="body"
                                  value={this.state.body }
                                  onChange={this.onChange}/>
                    </div>
                    <button type="submit">
                        Add Posts
                    </button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};



export default connect(null, { createPost})(PostForm);