var playlist = {
  SZA: "Go Gina", 
  Prince: "Purple Rain"
}

function updatePlaylist(playlist, artist, song) {
  // playlist.artist = song
  playlist[artist] = song

  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  // delete playlist.artist
  delete playlist[artist]

  ret playlist
}