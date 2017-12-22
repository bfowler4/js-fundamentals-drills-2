/* #getAllUsernames
 *
 * Takes in an object and returns an array of all usernames.
 *
 * @param {Object}
 * @return {Array}
 */
var getAllUsernames = (obj) => {
  return Object.keys(obj.data.id).map((key) => obj.data.id[key].username);
};

/* #hometownCity
 *
 * Takes in an array and returns a string of the users hometown city.
 *
 * @param {Array}
 * @return {String}
 */

var hometownCity = (arr) => {
  return arr[0].hometown.state.montana.city;
};

/* #usersCurrentState
 *
 * Takes 2 arguments 'data' and 'usernames' and returns a new object with the username as the key and the user's current state as the value.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */

var usersCurrentState = (data, usernames) => {
  return data.reduce((accum, curr, index) => {
    accum[usernames[index]] = curr[1].currentLocation.state;
    return accum;
  }, {});
};

/* #findAdmin
 *
 * Takes in an object and returns the username of the admin.
 *
 * @param {Object}
 * @return {String}
 */

var findAdmin = (obj) => {
  return obj.data.id[Object.keys(obj.data.id).filter((value) => {
    return obj.data.id[value].admin === true;
  })[0]].username;
};

/* #addNewMovie
 *
 * Takes in 3 arguments 'data', 'id', 'newMovie'. Returns an array of movie titles.
 *
 * @param {Object}
 * @param {Number} id
 * @param {String} movie to add to array
 * @return {Array}
 */

var addNewMovie = (data, id, newMovie) => {
  data.data.id[id].favoriteMovies.push(newMovie);
  return data.data.id[id].favoriteMovies;
};

/* #favoriteBooks
 *
 * Takes in an object and returns an array containing an object with the users favorite books with the author as the key and the title as the value.
 *
 * @param {Object}
 * @return {Array}
 */

var favoriteBooks = (obj) => {
  return Array(1).fill(Object.keys(obj.data.id).reduce((accum, curr) => {
    accum[obj.data.id[curr].favoriteBook.author] = obj.data.id[curr].favoriteBook.title;
    return accum;
  }, {}));
};

/* #countTracks
 *
 * Takes in an object and returns the number amount of tracks offered.
 *
 * @param {Object}
 * @return {Number}
 */

var countTracks = (obj) => {
  return Object.keys(obj.devLeague.tracks).length;
};

/* #fullTimeStatus
 *
 * Takes in 2 arguments 'data' and 'trackName' and changes the selected track full time status to true.
 *
 * @param {Object}
 * @param {String}
 * @return {Object}
 */

var fullTimeStatus = (data, trackName) => {
  data[trackName][0].fullTime.offered = true;
  return data[trackName][0].fullTime;
};

/* #newTrack
 *
 * Takes in 3 arguments 'data', 'array', and 'string'. Returns an object with a new track with the 'string' as the key and the 'array' as the value.
 *
 * @param {Object}
 * @param {Array}
 * @param {String}
 * @return {Object}
 */

var newTrack = (data, array, string) => {
  data[string] = array[0];
  return data;
};

/* #studentCount
 *
 * Takes in 2 arguments 'data' and 'trackName' and changes the selected track full time status to true.
 *
 * @param {Object}
 * @param {String}
 * @return {Object}
 */

var studentCount = (data, trackName) => {
  data.tracks[trackName][0].fullTime.offered = true;
  data.tracks[trackName][0].fullTime.currentStudents = 10;
  return {[trackName]: data.tracks[trackName][0].fullTime};
};

module.exports = {
  getAllUsernames: getAllUsernames,
  hometownCity: hometownCity,
  usersCurrentState: usersCurrentState,
  findAdmin: findAdmin,
  addNewMovie: addNewMovie,
  favoriteBooks: favoriteBooks,
  countTracks: countTracks,
  newTrack: newTrack,
  fullTimeStatus: fullTimeStatus,
  studentCount: studentCount
};
