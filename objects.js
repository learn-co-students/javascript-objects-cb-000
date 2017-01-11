var playlist = {
  jayz: '99 problems',
  ACDC: 'thunderstruck'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
  
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
  
}
