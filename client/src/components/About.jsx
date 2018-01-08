import React, {Component} from 'react';
import '../App.css';

class About extends Component {
    render() {
        return (
            <div>
                <h1>About Us</h1>
                <h3 className='aboutText'>My Playlist is a community playlist app. Anyone can add their favorite song 
                link to our playlist, so we can all enjoy it together. This app takes a 
                persons' song link and queues it to our player. You have the option 
                to delete or edit your song if you would like to. My Playlist is a project orignally made by 
                I myself (Chimezie Anyaoha), Madeline, Emel but it has been recently abanded and I decided to expand on the project. The original
                githun link is <a href='https://github.com/chimeziaya3/CMER'>here</a> It is a work in 
                progress so be warned tht some features may not work as intended just yet.
                </h3> 
    
            </div>
        )
    }
}

export default About;