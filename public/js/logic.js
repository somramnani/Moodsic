require("./spotify");

window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQCUmT0Sd-FEFzSlvXqsVD_b5_AaBzP7b63xesbUGSQZmeH-h36T-a5SEVRZwNBp3zy7Rxi3_HNSLM_IRmhB3vSQwu2cvWCgGjgtAck6c-vLmOfYr2GOtbkPONqntIafR9k152bLkwwyuNtzvLGd2g';
    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => {
            cb(token);
        }
    });
    // Error handling
    player.addListener('initialization_error', ({
        message
    }) => {
        console.error(message);
    });
    player.addListener('authentication_error', ({
        message
    }) => {
        console.error(message);
    });
    player.addListener('account_error', ({
        message
    }) => {
        console.error(message);
    });
    player.addListener('playback_error', ({
        message
    }) => {
        console.error(message);
    });
    // Playback status updates
    player.addListener('player_state_changed', state => {
        console.log(state);
    });
    // Ready
    player.addListener('ready', ({
        device_id
    }) => {
        console.log('Ready with Device ID', device_id);
    });
    // Not Ready
    player.addListener('not_ready', ({
        device_id
    }) => {
        console.log('Device ID has gone offline', device_id);
    });
    // Connect to the player!
    player.connect();
};

// Do we have to define device_id and message? I'm not seeing it in spotify.js; not that it should be there, 
// but I'm just wondering what's supposed to happen with these variables