var playlist = {
  yiruma: "river flows in you",
  prince: "kiss"
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
