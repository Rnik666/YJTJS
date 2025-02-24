
^https:\/\/spclient\.wg\.spotify\.com\/(bootstrap\/v1\/bootstrap|user-customization-service\/v1\/customize)$ url script-response-body https://raw.githubusercontent.com/Rnik666/666/refs/heads/main/Spotify1.js
^https:\/\/spclient\.wg\.spotify\.com\/(artistview\/v1\/artist|album-entity-view\/v2\/album)\/ url script-request-body https://raw.githubusercontent.com/Rnik666/666/refs/heads/main/Spotify2.js
hostname = spclient.wg.spotify.com