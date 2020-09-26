var playlist = { 'artistName1': 'songTitle1', 'artistName2': 'songTitle2' };

function updatePlaylist(Object, key, value) {
  Object[key] = value
  return Object
}

function removeFromPlaylist(Object, key) {
  delete Object[key]
  Object;
}