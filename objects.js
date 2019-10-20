var playlist = {}
playlist["Lenny Kravitz"] = "American Woman"
playlist["Journey"] = "Separate Worlds Apart"

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
