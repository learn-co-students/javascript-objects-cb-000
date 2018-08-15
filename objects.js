const playlist = {
  "the clash": "ghetto defendant"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  playlist
}
