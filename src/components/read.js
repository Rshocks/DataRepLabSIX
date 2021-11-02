import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

class Read extends Component
{

    //must change http to connect to backend
    //gets api from our backend server not online with json
    componentDidMount(){
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            // data underneath represents data between front and back end
            this.setState({mymovies: response.data.movies}) //search changed to match movies
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    state = {
        mymovies: []            
    };

    render(){
        return(
            <div>
                <h1>This is my Read component!</h1>
                <Movies films={this.state.mymovies}></Movies>
            </div>
        );
    }
}
export default Read;