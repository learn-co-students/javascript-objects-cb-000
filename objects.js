var playlist = {AloneMore: "Holly's Necklace"};

function updatePlaylist(playlistObject, artistName, song) {
    playlistObject[artistName] = song;
    return playlistObject;
}

function removeFromPlaylist(playlistObject, artistName) {
  delete playlistObject[artistName];
  return playlistObject;
}
