import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
        };

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    };

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
        };

        console.log(user);

        //send post request to the database through the /users/add endpoint created in backend
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        this.setState({
            username: "",
        });
    };

    render() {
        return (
            <div className="container">
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input 
                        type="text" 
                        required
                        className="form-control" 
                        value={this.state.username}
                        onChange={this.onChangeUsername} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    };
};