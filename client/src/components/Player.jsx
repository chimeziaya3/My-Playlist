import React, {Component} from 'react';
import '../App.css';
import Songlist from './SongList';
import AddButton from './AddButton';


class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      inputArtistValue: '',
      inputSongValue: '',
      inputSrcValue: '',
     
    }
    this.handleInputArtistChange = this.handleInputArtistChange.bind(this);
    this.handleInputSongChange = this.handleInputSongChange.bind(this);
    this.handleInputSrcChange = this.handleInputSrcChange.bind(this);

    this.handleSongEdit = this.handleSongEdit.bind(this);
    this.handleSongDelete = this.handleSongDelete.bind(this);
    this.handleSongSubmit = this.handleSongSubmit.bind(this);
    this.onSongClick = this.onSongClick.bind(this);
  }

  componentDidMount(){
    this.fetchAllPlaylist()
  }
  
  fetchAllPlaylist() {
    fetch('/api/myplaylist')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        console.log(json);
        this.setState((prevState) => {
          return {
            playlist: json.playlistData,
          }
        })
      })
  }

   handleInputArtistChange(event) {
    this.setState({inputArtistValue: event.target.value})
  }

  handleInputSongChange(event){
    this.setState({inputSongValue: event.target.value})
  }

  handleInputSrcChange(event){
    this.setState({inputSrcValue: event.target.value})
  }

    handleSongSubmit(event) {
    event.preventDefault();

        fetch('/api/myplaylist', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        artist: event.target.artist.value,
        song: event.target.song.value,
        src: event.target.src.value,
      }),
    })
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      if (json.playlist.id !== undefined) {
        const newSong = {
          artist: json.playlist.artist,
          song: json.playlist.song,
          src: json.playlist.src,
          id: json.playlist.id,
        }
        this.setState((prevState) => {
          return {
            playlist: prevState.playlist.concat(newSong),
            inputArtistValue: '',
            inputSongValue: '',
            inputSrcValue: '',
          }
        })
      } else {
        console.log('error');
      }
    })
  }

  handleSongEdit(event){
    event.preventDefault();
    console.log(event);
    fetch(`/api/myplaylist/${event.target.id.value}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        artist: event.target.artist.value,
        song: event.target.song.value,
        src: event.target.src.value
      }),
    })
    .then((response) => {
      if (response.status === 200) {
        this.fetchAllPlaylist();
      }
    })
  }

  handleSongDelete(playlistId) {
    fetch(`/api/myplaylist/${playlistId}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (response.status === 200) {
        this.fetchAllPlaylist();
      }
    })
  }

  onSongClick(e) {
  fetch('/api/myplaylist')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        console.log(json);
        this.setState((prevState) => {
          return {
            src: json.playlistData[e].src,
          }
        })
      })
  }

  
    render() {
        return(
            <main className='App-player'>
               <iframe className='player' src={this.state.src}>
               </iframe>
               <div className='songlist'>
                    {//<AddButton/>}
                  }
                    <AddButton
                      handleInputArtistChange={this.handleInputArtistChange}
                      handleInputSongChange={this.handleInputSongChange}
                      handleInputSrcChange={this.handleInputSrcChange}
                      handleSongSubmit={this.handleSongSubmit}

                      inputArtistValue={this.state.inputArtistValue}
                      inputSongValue={this.state.inputSongValue}
                      inputSrcValue={this.state.inputSrcValue}
                    />
                    <Songlist 
                        playlist={this.state.playlist} 
                        onSongClick={this.onSongClick} 
                        handleSongSubmit={this.handleSongSubmit}
                        handleSongDelete={this.handleSongDelete}
                        handleSongEdit={this.handleSongEdit}
                    />
               </div>
            </main>
        )
    }
}

export default Player;