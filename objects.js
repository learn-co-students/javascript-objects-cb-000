var playlist = {
  'Gwen Bunn': 'Yours',
  'Mishaal': 'Kid Goku',
  'Crayon': 'Post Blue',
  'DJ Shadow': 'What Does Your Soul Look Like'
}

function updatePlaylist(obj, key, value) {
  return obj[key] = value
}

function removeFromPlaylist(obj, key) {
  delete obj[key]
  return obj
}
