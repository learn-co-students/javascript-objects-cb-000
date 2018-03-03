var playlist = new Object({amrDiab: "Habibi ya noor el ain" }) ;

function updatePlaylist(playlist, artist, songTitle) {
  playlist[artist] = songTitle ;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName] ;
}
