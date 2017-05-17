var playlist = {
  Slowdive:"Alison"
}

var key = 'My Bloody Valentine'

playlist[key] = 'Sometimes'

function updatePlaylist(playlist, artist , songname ) {
  playlist[artist] = songname

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}
