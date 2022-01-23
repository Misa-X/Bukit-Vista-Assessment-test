import logo from './logo.svg';
import './App.css';
//import Amplify from 'aws-amplify'
import Storage from "@aws-amplify/storage";
import awsconfig from './aws-exports';
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import React, { useState, useEffect } from 'react';
import { listMovies } from './graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { Paper, IconButton } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { MoveToInboxSharp } from '@material-ui/icons';
import { updateMovies } from './graphql/mutations';
import PauseIcon from '@material-ui/icons/Pause';
import ReactPlayer from 'react-player';
import AddIcon from '@material-ui/icons/Add';
import { TextField } from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import { v4 as uuid } from 'uuid';
import { createMovies } from './graphql/mutations';


Amplify.configure(awsconfig);

function App() {

  const [movies, setMovies] = useState([]);
  const [moviePlaying, setMoviePlaying] = useState('');
  const [trailerURL, setTrailerURL] = useState('');
  const [showAddMovie, setShowAddNewMovie] = useState(false);
    

  useEffect(() => {
    fetchMovies();
}, []);

  const addLike = async idx => {
    try {
        const movie = movies[idx];
        movie.likes = movie.likes + 1;
        delete movie.createdAt;
        delete movie.updatedAt;

        const movieData = await API.graphql(graphqlOperation(updateMovies, { input: movie }));
        const movieList = [...movies];
        movieList[idx] = movieData.data.updateMovies;
        setMovies(movieList);
    } catch (error) {
        console.log('error on adding Like to movie', error);
    }
  };

  const fetchMovies = async () => {
      try {
          const movieData = await API.graphql(graphqlOperation(listMovies));
          const movieList = movieData.data.listMovies.items;
          console.log('movie list', movieList);
          setMovies(movieList);
      } catch (error) {
          console.log('error on fetching movies', error);
      }
  };

  const toggleMovie = async idx => {
    if (moviePlaying === idx) {
        setMoviePlaying('');
        return;
    }

    const movieFilePath = movies[idx].file_path;
    try {
        const fileAccessURL = await Storage.get(movieFilePath, { expires: 60 });
        console.log('access url', fileAccessURL);
        setMoviePlaying(idx);
        setTrailerURL(fileAccessURL);
        return;
    } catch (error) {
        console.error('error accessing the file from s3', error);
        setTrailerURL('');
        setMoviePlaying('');
    }




    // setMoviePlaying(idx);
    // return
};

    const AddMovie = ({ onUpload }) => {
        const [movieData, setMovieData] = useState({});
        const [mp3Data, setMp3Data] = useState();

        const uploadMovie = async () => {
            //Upload the movie
            console.log('movieData', movieData);
            const { title, description, production } = movieData;
            const { key } = await Storage.put(`${uuid()}.mp3`, mp3Data, { contentType: 'audio/mp3' });

            const createMovieInput = {
                id: uuid(),
                title,
                description,
                production,
                file_path: key,
                like: 0,
            };
            await API.graphql(graphqlOperation(createMovies, { input: createMovieInput }));

            onUpload();
        };
        

        return (
            <div className="newMovie">
                <TextField 
                    label="Title" 
                    value={movieData.title}
                    onChange={e => setMovieData({ ...movieData, title: e.target.value })}
                 />
                <TextField 
                    label="Production" 
                    value={movieData.prodution}
                    onChange={e => setMovieData({ ...movieData, owner: e.target.value })}
                />
                <TextField 
                    label="Description" 
                    value={movieData.description}
                    onChange={e => setMovieData({ ...movieData, description: e.target.value })}
                />
                <input type="file" accept="audio/mp3" onChange={e => setMp3Data(e.target.files[0])} />
                
                <IconButton onClick={uploadMovie}>
                    <PublishIcon />
                </IconButton>
            </div>
        )
    }



  return (
    <div className="App">
      <header className="App-header">
       <AmplifySignOut />
       <h2>My App Content</h2>
      </header>
      <div className="movieList">
    {movies.map((movie, idx) => {
        return (
            <Paper variant="outlined" elevation={2} key={`movie${idx}`}>
              
                <div className="movieCard">
                {/* <div className="moviePoster">{movie.Poster}</div> */}
                    <IconButton aria-label="play" onClick={() => toggleMovie(idx)}>
                        {moviePlaying === idx ? <PauseIcon /> : <PlayArrowIcon />}
                    </IconButton>
                    <div>
                        <div className="movieTitle">{movie.title}</div>
                        <div className="movieOwner">{movie.production}</div>
                    </div>
                    <div>
                        <IconButton aria-label="like" onClick={() => addLike(idx)}>
                            <FavoriteIcon />
                        </IconButton>
                        {movie.likes}
                    </div>
                    <div className="movieDescription">{movie.description}</div>
                </div>

                {moviePlaying === idx ? (
                    <div className="ourAudioPlayer">
                        <ReactPlayer
                            url={trailerURL}
                            controls
                            playing
                            // height="200px"
                            width='100%'
                            height='100%'
                            onPause={() => toggleMovie(idx)}
                        />
                    </div>
                ) : null}


            </Paper>
        );
    })}

    {
        showAddMovie ?( <AddMovie onUpload={()=>{
            setShowAddNewMovie(false);
            fetchMovies();
        }}/>) : <IconButton onClick={() => setShowAddNewMovie(true)}>
                    <AddIcon /> 
                </IconButton>
    }


</div>
    </div>
  );
}

export default withAuthenticator (App);
