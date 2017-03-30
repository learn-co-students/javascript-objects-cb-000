var playlist = {'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"};

function updatePlaylist(playlist, artistName, songTitle){
  var artistName = "Linkin Park";
  var songTitle = "Breaking the Habit";
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
}
