var playlist = { Beck: "Modern Love"}

function updatePlaylist(playlist, artist, title){
	playlist[artist] = title
	
}

function removeFromPlaylist(playlist, artist){
	delete playlist[artist];
	
} 