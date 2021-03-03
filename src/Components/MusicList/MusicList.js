import React, {Component} from 'react';
import axios from 'axios';
import './musicList.css';

export default class MusicList extends Component {

    state = {
        music : [],
        searchSong : ''

    };


    

    componentDidMount(){

        axios.get(`http://www.devcodecampmusiclibrary.com/api/music`)
        .then(res => {
            this.setState({music: res.data});

        });
};

    render() {
        return(
            <div>
                <div className="table-container">
                <table className="music-table" >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Album</th>
                            <th>Artist</th>
                            <th>Genre</th>
                            <th>Release Date</th>
                        </tr>
                    </thead>

                {this.state.music.map(song=>
                <tr>
                    <td>{song.title}</td>
                    <td>{song.album}</td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td>{song.releaseDate}</td>
                </tr>
                )}
                
                </table>


                </div>
            </div>
        )
    }
}

