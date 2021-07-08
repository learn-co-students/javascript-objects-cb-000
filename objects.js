var playlist = {"Beatles" : "Hey Jude"}

function updatePlaylist(obj, artistName, songTitle){
  return Object.assign(obj, {[artistName]:songTitle})
}

function removeFromPlaylist(playlist, artistName){
  return delete playlist[artistName]
}
