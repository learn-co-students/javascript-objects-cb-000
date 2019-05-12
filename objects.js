var playlist = {
  "Gucci Mane" : "Lemonade"
};

function updatePlaylist(playlist, artistName, songTitle){
    playlist[artistName] = songTitle
  
    return playlist
}

updatePlaylist(playlist, artistName,songTitle)

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  
  return playlist
}