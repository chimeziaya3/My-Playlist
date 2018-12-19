import React, { Component } from 'react';

class AddButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      isBeingAdded: false,
    }
  }

  renderAddButton(){
    return(
      <div id="Addbutton">
       <button onClick={() => {this.setState({isBeingAdded: true})}}>Add Song</button>
      </div>
    )
  }

  renderAddSongForm() {
    return (
      <div id="AddForm">
       <form onSubmit = {(event) => {
           this.props.handleSongSubmit(event);
           this.setState({isBeingAdded: false});
        }}
         >
        <input
            name='artist' 
            type='text' 
            value={this.props.inputArtistValue}
            placeholder='Artist'
            onChange={this.props.handleInputArtistChange}
        />
        <input 
            name='song'
            type='text' 
            value={this.props.inputSongValue}
            placeholder='Song'
            onChange={this.props.handleInputSongChange}
        />
        <input
            name='src' 
            type='text'
            value={this.props.inputSrcValue} 
            placeholder='link'
            onChange={this.props.handleInputSrcChange}
        />
        <button>save</button>
       </form>
      </div>
    );
  }

  render() {
      if(this.state.isBeingAdded === true){
        return this.renderAddSongForm();
      } else {
        return this.renderAddButton()
      }
    
  }
}

export default AddButton;