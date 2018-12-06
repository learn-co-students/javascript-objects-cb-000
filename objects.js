var playlist = {"Taylor Swift": "Love Song"}

function updatePlaylist(playlist, artist_name, song_title) {
  return Object.assign(playlist, {[artist_name]: song_title})
}

function removeFromPlaylist(playlist, artist_name) {
  delete playlist[artist_name]
  return playlist  
}
