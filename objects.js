var listies = {queen:'bohemian rhapsody', beatles: 'yellow submarine'} //creates an empty object

//a function that takes a playlist, and adds songs by artist name and song title
function updatePlaylist(playlist, name, title){
  playlist[name] = title;
  return playlist
}

function removeFromPlaylist(playlist, name) {
  delete playlist[name];
  return playlist
}

updatePlaylist(listies, 'me', "turkeysong")
