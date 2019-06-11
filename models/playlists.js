module.exports = (sequelize, DataTypes) => {
  var Playlist = sequelize.define('Playlist', {
    playlistName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      songs: {
        artist: DataTypes.STRING,
        song: DataTypes.STRING,
        url: DataTypes.STRING
      }
    },
  })
  return Playlist;
};