var playlist = { "Kanye West" : "Stronger"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, playlist, { [artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
