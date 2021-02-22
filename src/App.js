import React, {Component} from 'react';
import MusicList from './Components/MusicList';
import axios from "axios";


class App extends Component{
    render(){ 
        return(
        <div>
            <h1>Hello</h1>
            <MusicList/>
            <h1>Did this load?</h1>

        </div>
        
    );
   
}
}
  
export default App;