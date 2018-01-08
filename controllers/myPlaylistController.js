const Playlist = require('../models/myPlaylist');

const myPlaylistController = {};

myPlaylistController.index = (req, res) => {
  Playlist.findAll()
    .then(playlist => {
      res.json({ message: 'ok',
        playlistData: {playlist},
      });
  })
  .catch(err => {
    console.log(err);
    res.status(400).json({message: '400', err});
  });
};

myPlaylistController.show = (req, res) => {
  Playlist.findById(req.params.id)
    .then(playlist => {
      res.json({
        message: 'ok',
        playlist: {playlist},
      });
    })
    .catch(err => {
      res.status(400).json({message: '400', err});
    });
};

myPlaylistController.create = (req, res) => {
  console.log(req);
  Playlist.create({
    artist: req.body.artist,
    song: req.body.song,
    src: req.body.src
  })
  .then(playlist => {
    res.json({message: 'ok', song: {playlist}});
  })
  .catch(err => {
    res.status(400).json({message: '400', err});
  });
};

myPlaylistController.update = (req, res) => {
  Playlist.update({
    artist: req.body.artist,
    song: req.body.song,
    src: req.body.src,
  }, req.params.id)
  .then(song => {
    res.json({message: 'ok', song: {song}});
  })
  .catch(err => {
    res.status(400).json(err);
  });
};

myPlaylistController.destroy = (req, res) => {
  Playlist.destroy(req.params.id)
    .then(() => {
      res.json({message: 'song deleted'});
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = myPlaylistController;