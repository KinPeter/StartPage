/**
 *  MAIN JS
 */

//Get user name, location and weather data
getLocationByIP(user, $('.welcome'), $('.weather'), getWeather);

//Fill up the notes
if (user === 'Peter') {
    fetchNotes();
}

//Fill up the tile boxes 
getTileData('top', $('#top-links'));
getTileData('coding', $('#coding-links'));
getTileData('google', $('#google-links'));
getTileData('fun', $('#fun-links'));
getTileData('others', $('#other-links'));

//Google search
$('#google-search').focus().keypress(function (e) {
    var key = e.which;
    if (key == 13) {window.location = `https://www.google.com/search?q=${$('#google-search').val()}`;}
}); 

//Links search
$('#links-search').keypress(function (e) {
    var key = e.which;
    if (key == 13) {
        //initiate search
        searchFromAPI($('#links-search').val());
    }
}); 

//Dictionary search
$('#korean-search').keypress(function (e) {
    var key = e.which;
    if (key == 13) {
        //initiate search
        wordLookup($('#korean-search').val());
    }
}); 