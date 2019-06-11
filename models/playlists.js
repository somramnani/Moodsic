module.exports = (sequelize, DataTypes) => {
  var Playlist = sequelize.define('Playlist', {
    playlist_names: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
  })
  return Playlist;
};