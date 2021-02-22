import React, {Component} from 'react';
import axios from 'axios';

export default class MusicList extends Component {

    state = {
        music : [],
    };

    componentDidMount(){

        axios.get('http://www.devcodecampmusiclibrary.com/api/music')
        .then(res => {
            const music = res.data;
            console.log(music);
            this.setState([music]);

        });
};
    render() {
        return(
            <ul>
                {this.state.music.map(song=><li>{song.title}</li>)}
            </ul>
        )
    }
}

