var
  Song = require('../models/Song.js')

module.exports = {
  index: (req, res) => {
    Song.find({}, (err, songs) => {
      res.json(songs)
    })
   },

  show: (req, res) => {
    Song.findById(req.params.id, (err, song) => {
      res.json(song)
    })
  },
  create: (req, res) => {
    Song.create(req.body, (err, song) => {
      res.json({message: "Song created", song})// or song: song
    })
  },
  update: (req, res) => {
    Song.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, song) => {
      res.json({message: "Song updated!", song})
    })
  },
  destroy: (req, res) => {
    Song.findByIdAndRemove(req.params.id, (err) => {
      res.json({message: "Song Deleted... meow."})
    })
  }
}
