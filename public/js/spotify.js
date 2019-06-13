// // //Client ID 4562bd2994224fa4bf912981be4699d1
// // //Client Secret ff3b03831bf84774afbb85bd8cc72dea

const application = {};

// var id = "4562bd2994224fa4bf912981be4699d1"
const app = require("server.js");
// attempt to GET playlist info from API
$("#happyButton").on("click", function () {
    application.getPlaylist = (playlist_id) => $.ajax({
        //playlist ID# 21THa8j9TaSGuXYNBU5tsC goes into {playlist_id} (actual playlist)
        url: 'https://api.spotify.com/v1/playlists/{playlist_id}/tracks',
        method: 'GET',
        dataType: 'json',
        data: {
            type: playlist_id,
            q: playlist_id,
            data: {
                type: artist,
                q: name
            }
        }
    });
});


$("#sadButton").on("click", function () {
    application.getPlaylist = (playlist_id) => $.ajax({
        //playlist ID# 21THa8j9TaSGuXYNBU5tsC goes into {playlist_id} (actual playlist)
        url: 'https://api.spotify.com/v1/playlists/{playlist_id}/tracks',
        method: 'GET',
        dataType: 'json',
        data: {
            type: playlist_id,
            q: playlist_id,
            data: {
                type: artist,
                q: name
            }
        }
    });
});

$("#angryButton").on("click", function () {
    application.getPlaylist = (playlist_id) => $.ajax({
        //playlist ID# 21THa8j9TaSGuXYNBU5tsC goes into {playlist_id} (actual playlist)
        url: 'https://api.spotify.com/v1/playlists/{playlist_id}/tracks',
        method: 'GET',
        dataType: 'json',
        data: {
            type: playlist_id,
            q: playlist_id,
            data: {
                type: artist,
                q: name
            }
        }
    });
});

$("#jealousButton").on("click", function () {
    application.getPlaylist = (playlist_id) => $.ajax({
        //playlist ID# 21THa8j9TaSGuXYNBU5tsC goes into {playlist_id} (actual playlist)
        url: 'https://api.spotify.com/v1/playlists/{playlist_id}/tracks',
        method: 'GET',
        dataType: 'json',
        data: {
            type: playlist_id,
            q: playlist_id,
            data: {
                type: artist,
                q: name
            }
        }
    });
});

$("#stressedButton").on("click", function () {
    application.getPlaylist = (playlist_id) => $.ajax({
        //playlist ID# 21THa8j9TaSGuXYNBU5tsC goes into {playlist_id} (actual playlist)
        url: 'https://api.spotify.com/v1/playlists/{playlist_id}/tracks',
        method: 'GET',
        dataType: 'json',
        data: {
            type: playlist_id,
            q: playlist_id,
            data: {
                type: artist,
                q: name
            }
        }
    });
});

$("#loveButton").on("click", function () {
    application.getPlaylist = (playlist_id) => $.ajax({
        //playlist ID# 21THa8j9TaSGuXYNBU5tsC goes into {playlist_id} (actual playlist)
        url: 'https://api.spotify.com/v1/playlists/{playlist_id}/tracks',
        method: 'GET',
        dataType: 'json',
        data: {
            type: playlist_id,
            q: playlist_id,
            data: {
                type: artist,
                q: name
            }
        }
    });
});

$("#tiredButton").on("click", function () {
    application.getPlaylist = (playlist_id) => $.ajax({
        //playlist ID# 21THa8j9TaSGuXYNBU5tsC goes into {playlist_id} (actual playlist)
        url: 'https://api.spotify.com/v1/playlists/{playlist_id}/tracks',
        method: 'GET',
        dataType: 'json',
        data: {
            type: playlist_id,
            q: playlist_id,
            data: {
                type: artist,
                q: name
            }
        }
    });
});

//a diff attempt to GET playlist from API
function handlePlaylistSubmit(event){
event.preventDefault();
let jsonData = {
    name: event.target.playlistName.value,
    public: false,
    description: event.target.playlistDescription.value
}};

axios({
    method: 'post',
    url: 'https://api.spotify.com/v1/users/${this.state.userReducer.SpotifyId}/playlists',
    data: jsonData,
    dataType: 'json',
    headers: {
        'Authorization': 'Bearer ' + this.state.userReducer.accessToken,
        'Content-Type': 'application/json'
    }
}).then(res => {
    const data = {
        name: res.data.name,
        externalUrl: res.data.external_urls.spotify,
        playlistId: res.data.id,
        userId: this.status.userReducer.id
    }
    console.log(data);
});



// application.getAlbums = (albums) => $.ajax({
//     url: 'https://api.spotify.com/v1/search',
//     method: 'GET',
//     dataType: 'json',
//     data: {
//         type: 'albums',
//         q: albums
//     }
// });
// application.getAlbumTracks = (id) => $.ajax({
//     url: `https://api.spotify.com/v1/albums/${id}/tracks`,
//     method: 'GET',
//     dataType: 'json'
// });
// application.getArtists = (artist) => $.ajax({
//     url: 'https://api.spotify.com/v1/search',
//     method: 'GET',
//     dataType: 'json',
//     data: {
//         type: 'artist',
//         q: artist
//     }
// });
// application.getAristsAlbums = (id) => $.ajax({
//     url: `https://api.spotify.com/v1/artists/${id}/albums`,
//     method: 'GET',
//     dataType: 'json',
//     data: {
//         album_type: 'album',
//     }
// });
// application.getPlaylist = (id) => $.ajax({
//     url: 'https://api.spotify.com/vi/playlists/${id}/tracks',
//     method: 'GET',
//     dataType: 'json'
// });
// application.getAlbums = function (artists) {
//     let albums = artists.map(artist => application.getAristsAlbums(artist.id));
//     $.when(...albums)
//         .then((...albums) => {
//             let albumIds = albums
//                 .map(a => a[0].items)
//                 .reduce((prev, curr) => [...prev, ...curr], [])
//                 .map(album => application.getAlbumTracks(album.id));
//             application.getTracks(albumIds);
//         });
// };
// application.getTracks = function (tracks) {
//     $.when(...tracks)
//         .then((...tracks) => {
//             tracks = tracks
//                 .map(getDataObject)
//                 .reduce((prev, curr) => [...prev, ...curr], []);
//             const randomPlayList = getRandomTracks(50, tracks);
//             application.createPlayList(randomPlayList);
//         })
// };
// application.createPlayList = function (songs) {
//     const baseUrl = 'https://embed.spotify.com/?theme=white&uri=spotify:trackset:My Playlist:';
//     songs = songs.map(song => song.id).join(',');
//     $('.loader').removeClass('show');
//     $('.playlist').append(`<iframe src="${baseUrl + songs}" height="400"></iframe>`);
// }
// application.init = function () {
//     $('form').on('submit', function (e) {
//         e.preventDefault();
//         let albums = $('input[type=search]').val();
//         $('.loader').addClass('show');
//         albums = albums
//             .split(',')
//             .map(application.getArists);
//         $.when(...albums)
//             .then((...albums) => {
//                 albums = albums.map(a => a[0].albums.items[0]);
//                 console.log(albums);
//                 application.getAlbums(albums);
//             });
//     });
// }
// $(application.init);
// const getDataObject = arr => arr[0].items;

// function getRandomTracks(num, tracks) {
//     const randomResults = [];
//     for (let i = 0; i < num; i++) {
//         randomResults.push(tracks[Math.floor(Math.random() * tracks.length)])
//     }
//     return randomResults;
// }