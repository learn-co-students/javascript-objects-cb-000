var playlist = {}

var playlist = { artist: "song title"}

function updatePlaylist(playlist, artist, song) {
  //add song  and artist as key-value pair
  playlist[artist] = song

  //return playlist
  return playlist
}


function removeFromPlaylist(playlist, artistName) {

  //delete key-value from playlist
  delete playlist[artistName];

  //return updated playlist
  return playlist;
}
