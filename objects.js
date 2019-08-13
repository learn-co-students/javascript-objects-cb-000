var playlist = { Garth: 'The Dance' };

var updatePlaylist = (playlist, artistName, songTitle) =>
  Object.assign(playlist, { [artistName]: songTitle });

var removeFromPlaylist = (playlist, artistName) => {
  delete playlist[artistName];
};
