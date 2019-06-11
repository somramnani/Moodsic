module.exports = (sequelize, DataTypes) => {
  var Collection = sequelize.define('Collection', {
    collection: {
      playlist_name: DataTypes.STRING,
      allowNull: true,
      unique: false,
      tracks: {
        artist: DataTypes.STRING,
        album: DataTypes.STRING,
        song_name: DataTypes.STRING,
        song_URL: DataTypes.STRING
      }
    },
  })
  return Collection;
};