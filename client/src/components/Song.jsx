
import React, {Component} from 'react';
import '../App.css';


class Song extends Component {
     constructor(props){
    super(props);
    this.state = {
      isBeingAdded: false,
      isBeingEdited: false,
      inputArtistValue: this.props.playlist.artist,
      inputSongValue: this.props.playlist.song,
      inputSrcValue: this.props.playlist.src,
    }
    
    this.handleInputArtistChange = this.handleInputArtistChange.bind(this);
    this.handleInputSongChange = this.handleInputSongChange.bind(this);
    this.handleInputSrcChange = this.handleInputSrcChange.bind(this);
  }
  handleInputArtistChange(event){
      this.setState({inputArtistValue: event.target.value});
  }
  handleInputSongChange(event){
      this.setState({inputSongValue: event.target.value});
  }
  handleInputSrcChange(event){
      this.setState({inputSrcValue: event.target.value});
  }

  renderEditForm() {
    return (
      <div id="EditForm">
       <form onSubmit = {(event) => {
           this.props.handleSongEdit(event);
           this.setState({isBeingEdited: false});
        }}
         >
        <input
            name='artist' 
            type='text' 
            value={this.state.inputArtistValue}
            placeholder='Artist'
            onChange={this.handleInputArtistChange}
        />
        <input 
            name='song'
            type='text' 
            value={this.state.inputSongValue}
            placeholder='Song'
            onChange={this.handleInputSongChange}
        />
        <input
            name='src' 
            type='text'
            value={this.state.inputSrcValue} 
            placeholder='link'
            onChange={this.handleInputSrcChange}
        />
        <input
            style={{visibility: 'hidden'}}
            readOnly
            name="id"
            value={this.props.playlist.id}
        />
        <button>save</button>
       </form>
      </div>
    );
  }

    renderPlaylist() {
        return(
            <div className='songLi'>
                <div>
                <button className='songs' onClick={() => {this.props.onSongClick(this.props.index)}}>
                    <h4>{this.props.playlist.song}</h4>
                    <p>{this.props.playlist.artist}</p>
                    
                </button>
                <button onClick={() => {this.props.handleSongDelete(this.props.playlist.id)}}>delete</button>
                    <button className='editSongBtn' onClick={()=> {this.setState({isBeingEdited: true})}}>Edit song</button>
                </div>
            </div>
        )
    }



    render(){
        if(this.state.isBeingAdded === true) {
            return this.renderAddForm();
        }
        else if(this.state.isBeingEdited === true) {
            return this.renderEditForm();
        }else {
            return this.renderPlaylist();
        }

    }
}


export default Song;