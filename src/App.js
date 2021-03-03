import React, {Component} from 'react';
import axios from 'axios';
import MusicList from './Components/MusicList/MusicList';
import MyLogo from './Components/Logo/MyLogo';
import './app.css';

class App extends Component{
    state = {}

    componentDidMount(){

        axios.get(`localhost:5000`)
        .then(res => {
            console.log(res);
        });
};

    render(){ 
        return(
        <div>
            <MyLogo/>
            <MusicList/>
            
        </div>
        
    );
   
}
}
  
export default App;