// //Client ID 4562bd2994224fa4bf912981be4699d1
// //Client Secret ff3b03831bf84774afbb85bd8cc72dea

const app = {};

var id = "4562bd2994224fa4bf912981be4699d1"

app.getAlbums = (albums) => $.ajax({
    url: 'https://api.spotify.com/v1/search',
    method: 'GET',
    dataType: 'json',
    data: {
        type: 'albums',
        q: albums
    }
});
app.getAlbumTracks = (id) => $.ajax({
    url: `https://api.spotify.com/v1/albums/${id}/tracks`,
    method: 'GET',
    dataType: 'json'
});
app.getArtists = (artist) => $.ajax({
    url: 'https://api.spotify.com/v1/search',
    method: 'GET',
    dataType: 'json',
    data: {
        type: 'artist',
        q: artist
    }
});
app.getAristsAlbums = (id) => $.ajax({
    url: `https://api.spotify.com/v1/artists/${id}/albums`,
    method: 'GET',
    dataType: 'json',
    data: {
        album_type: 'album',
    }
});
app.getPlaylist = (id) => $.ajax({
    url: 'https://api.spotify.com/vi/playlists/${id}/tracks',
    method: 'GET',
    dataType: 'json'
});
app.getAlbums = function (artists) {
    let albums = artists.map(artist => app.getAristsAlbums(artist.id));
    $.when(...albums)
        .then((...albums) => {
            let albumIds = albums
                .map(a => a[0].items)
                .reduce((prev, curr) => [...prev, ...curr], [])
                .map(album => app.getAlbumTracks(album.id));
            app.getTracks(albumIds);
        });
};
app.getTracks = function (tracks) {
    $.when(...tracks)
        .then((...tracks) => {
            tracks = tracks
                .map(getDataObject)
                .reduce((prev, curr) => [...prev, ...curr], []);
            const randomPlayList = getRandomTracks(50, tracks);
            app.createPlayList(randomPlayList);
        })
};
app.createPlayList = function (songs) {
    const baseUrl = 'https://embed.spotify.com/?theme=white&uri=spotify:trackset:My Playlist:';
    songs = songs.map(song => song.id).join(',');
    $('.loader').removeClass('show');
    $('.playlist').append(`<iframe src="${baseUrl + songs}" height="400"></iframe>`);
}
app.init = function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        let albums = $('input[type=search]').val();
        $('.loader').addClass('show');
        albums = albums
            .split(',')
            .map(app.getArists);
        $.when(...albums)
            .then((...albums) => {
                albums = albums.map(a => a[0].albums.items[0]);
                console.log(albums);
                app.getAlbums(albums);
            });
    });
}
$(app.init);
const getDataObject = arr => arr[0].items;

function getRandomTracks(num, tracks) {
    const randomResults = [];
    for (let i = 0; i < num; i++) {
        randomResults.push(tracks[Math.floor(Math.random() * tracks.length)])
    }
    return randomResults;
}