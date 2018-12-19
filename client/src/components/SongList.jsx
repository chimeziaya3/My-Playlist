import React, {Component} from 'react'
import Song from './Song';

class Songlist extends Component {
    render() {
        return(
            <div>
                {this.props.playlist.map((playlist, index) => {
                    return (
                        <Song 
                            key={playlist.id} 
                            playlist={playlist} 
                            index={index} 
                            onSongClick={this.props.onSongClick} 
                            handleSongSubmit={this.props.handleSongSubmit}
                            handleSongDelete={this.props.handleSongDelete}
                            handleSongEdit={this.props.handleSongEdit}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Songlist;