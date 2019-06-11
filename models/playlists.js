module.exports = (sequelize, DataTypes) => {
  var Playlist = sequelize.define('Playlist', {
    playlist_names: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
  })
  return Playlist;
};