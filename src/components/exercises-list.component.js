import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ExerciseList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            exercises: []
        }

        this.deleteExercise = this.deleteExercise.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises')
            .then(res => {
                this.setState({
                    exercises: res.data
                }, () => console.log(this.state.exercises))
            })
            .catch(err => console.log(err));
        
    };

    deleteExercise(id) {
        axios.delete(`http://localhost:5000/exercises/${id}`)
            .then(res => console.log(res));

        this.setState({
            exercises: this.state.exercises.filter(exercise => exercise._id !== id)
        })
    }

    render() {

        return (
            <div className="container">
                <h3>Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {this.state.exercises.map(exercise => {
                            return (
                                <tr>
                                    <td>{exercise.username}</td>
                                    <td>{exercise.description}</td>
                                    <td>{exercise.duration}</td>
                                    <td>{exercise.date.substring(0, 10)}</td>
                                    <td>
                                        <Link to={"/edit/"+exercise._id}>edit</Link> | <a href="#" onClick={() => {this.deleteExercise(exercise._id)}}>delete</a>
                                    </td>
                                </tr>
                            );
                        })}

                    </tbody>
                </table>
            </div>
        );
    };
};