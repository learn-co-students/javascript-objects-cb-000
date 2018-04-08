// objects defines an object called `playlist` containing at least one artist-song pair
var playlist = {
  'artist1': 'song1',
  'artist2': 'song2'
};

// objects updatePlaylist(playlist, artistName, songTitle) adds the `artistName: songTitle` key-value pair to `playlist`
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

// objects removeFromPlaylist(playlist, artistName) removes `artistName` from `playlist`
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}


/*
USING VARIABLES AS OBJECT KEYS (doesn't work in ES5)

  const firstMeal = 'breakfast';

  firstMeal //=> "breakfast"

  var meals = { firstMeal: 'oatmeal' };

  meals //=> {firstMeal: "oatmeal"}

------

USING VARIABLES AS OBJECT KEYS (works in ES6) --> wrap the key in square brackets ([])

  const firstMeal = 'breakfast';

  firstMeal //=> "breakfast"

  var meals = { [firstMeal]: 'oatmeal' };

  meals //=> { breakfast: 'oatmeal' }

*/
