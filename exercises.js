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

/* #bigDataTrack
 *
 * Takes in 2 arguments 'data' and 'trackName' and changes the selected track full time status to true and doubles the amount of current students attending.
 *
 * @param {Object}
 * @param {String}
 * @return {Object }
 */

var bigDataTrack = (data, trackName) => {
  data.tracks[trackName][0].fullTime.offered = true;
  data.tracks[trackName][0].fullTime.currentStudents = 10;
  return {[trackName]: data.tracks[trackName][0].fullTime};
};

/* #incrementAge
 *
 * Takes in 2 arguments 'value' and 'key' and returns key-value pairs in an object.
 *
 * @param {Object}
 * @param {String}
 * @return {Object}
 */

var incrementAge = (value, key) => {
  return key.reduce((accum, curr, index) => {
    accum[curr] = value[index];
    return accum;
  }, {});
};

/* #movieRatings
 *
 * Takes in 2 arguments 'key' and 'value' and returns key-value pairs in an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */

var movieRatings = (key, value) => {
  const res = {};
  let index = 0;
  for (let i = 0; i < key.length; i ++) {
    for (let j = 0; j < key[i].length; j ++, index ++) {
      res[key[i][j]] = value[index];
    }
  }

  return res;
};

/* #sumOfAllStudents
 *
 * Takes in an object and returns the sum of all currently enrolled students.
 *
 * @param {Object}
 * @return {Number}
 */

var sumOfAllStudents = (obj) => {
  return Object.keys(obj).reduce((accum, curr) => {
    accum += obj[curr][0].fullTime.currentStudents;
    accum += obj[curr][1].partTime.currentStudents;
    return accum;
  }, 0);
};

/* #mapLanguageToCreator
 *
 * Takes in 3 arguments 'data', 'createdBy', and 'year' and returns key-value pairs { name: language }.
 *
 * @param {Object} data
 * @param {Array} names
 * @param {Number} year
 * @return {Object}
 */

var mapLanguageToCreator = (data, createdBy, year) => {
  return Object.keys(data).reduce((accum, curr) => {
    if (data[curr].yearCreated === year)
      accum[data[curr].createdBy] = curr;
    return accum;
  }, {});
};

/* #mapOccurrences
 *
 * Takes in an object and returns key-value pairs that count how many languages were created in given years { 2017: 1 }.
 *
 * @param {Object} data
 * @return {Object}
 */

var mapOccurrences = (data) => {
  return Object.keys(data).reduce((accum, curr) => {
    if (accum.hasOwnProperty(data[curr].yearCreated))
      accum[data[curr].yearCreated] ++;
    else
      accum[data[curr].yearCreated] = 1;
    return accum;
  }, {});
};

/* #countLanguages
 *
 * Takes in an object and returns the number of languages in the dataset.
 *
 * @param {Object}
 * @return {Number}
 */

var countLanguages = (data) => {
  return Object.keys(data).length;
};

/* #phoneNumber
 *
 * Takes in a string and returns only the numbers in an array.
 *
 * @param {String} phone number
 * @return {Array}
 */

var phoneNumber = (string) => {
  return string.match(/[0-9]/g).map((n) => {
    return Number.parseInt(n);
  });
};

/* #phoneNumber
 *
 * Takes in an object and returns the names of the tracks offered reversed.
 *
 * @param {Object}
 * @return {Array}
 */

var reverseStrings = (obj) => {
  return Object.keys(obj.devLeague.tracks).map((string) => {
    return string.split('').reverse().join('');
  });
};

/* #getAgeById
 *
 * Takes in an object and returns an array with the user's username and age.
 *
 * @param {Object}
 * @return {Array}
 */

var getAgeById = (obj, id) => {
  return Object.keys(obj.data.id).filter((n) => n == id).map((curr) => {
    return [obj.data.id[curr].username, obj.data.id[curr].age];
  }).shift();
};

/* #allTheStates
 *
 * Takes in an object and returns an array with all of the state names of where user's have lived.
 *
 * @param {Object}
 * @return {Array}
 */

var allTheStates = (arr) => {
  return arr.reduce((accum, curr) => {
    accum.push(Object.keys(curr.citiesLived[0].hometown.state)[0]);
    accum.push(Object.keys(curr.citiesLived[1].currentLocation.state)[0]);
    return accum;
  }, []);
};

/* #allTheMovies
 *
 * Takes in an object and returns an array of strings with all the names of each user's favorite movies.
 *
 * @param {Object}
 * @return {Array}
 */

var allTheMovies = (arr) => {
  return arr.reduce((accum, curr) => {
    return accum.concat(curr.favoriteMovies);
  }, []);
};

/* #addCoffeeFlavor
 *
 * Takes in an object and returns a new object with the name of the coffee as the key and the value as an array of flavors plus a new flavor added to each array.
 *
 * @param {Object}
 * @param {String} flavor
 * @return {Object}
 */

var addCoffeeFlavor = (obj, flavor) => {
  return Object.keys(obj).reduce((accum, curr) => {
    obj[curr].flavors.push(flavor);
    accum[curr] = obj[curr].flavors;
    return accum;
  }, {});
};

/* #avgCoffeePrice
 *
 * Takes in 2 arguments 'data' and 'number'. Returns the average price of coffee based on total/number.
 *
 * @param {Object}
 * @param {Number} number of coffee types
 * @return {Number}
 * 
 */

var avgCoffeePrice = (data, number) => {
  return Math.round(Object.keys(data).reduce((accum, curr) => {
    accum += data[curr].pricePerPound;
    return accum;
  }, 0) / number);
};

/* #updateBakedGoodsPrice
 *
 * Takes in 2 arguments 'data' and 'discountedPrice' and returns the data object with the new discountedPrice of all bakedGoods.
 *
 * @param {Object}
 * @param {Number} discountedPrice
 * @return {Number}
 * 
 */

var updateBakedGoodsPrice = (data, discountedPrice) => {
  return Object.keys(data.bakedGoods).reduce((accum, curr) => {
    data.bakedGoods[curr].pricePerItem = 1;
    accum[curr] = data.bakedGoods[curr];
    return accum;
  }, {}); 
};

/* #costOfCoffeeOnOrder
 *
 * Takes in an object and returns the total cost of all coffee's on order.
 *
 * @param {Object}
 * @return {Number}
 * 
 */

var costOfCoffeeOnOrder = (obj) => {
  return Object.keys(obj).reduce((accum, curr) => {
    accum += obj[curr].pricePerPound * obj[curr].ordered;
    return accum;
  }, 0);
};

/* #costOfCoffeeOnOrder
 *
 * Takes in an array and returns a new array with all the flavors of coffee displaying only once in the array.
 *
 * @param {Array}
 * @return {Array}
 * 
 */

var uniqueCoffeeFlavors = (arr) => {
  return arr.reduce((accum, curr) => {
    return accum.concat(curr);
  }, []).filter((curr, index, array) => {
    return array.indexOf(curr) == index;
  });
};

/* #cheapestSandwich
 *
 * Takes in an object and returns a string with the price of the cheapest sandwich and the name of the sandwich. (eg. "$1 sandwichName")
 *
 * @param {Object}
 * @return {String}
 * 
 */

var cheapestSandwich = (obj) => {
  return Object.keys(obj.sandwiches).reduce((accum, curr) => {
    if (obj.sandwiches[curr].pricePerItem < accum.split(' ')[0].match(/[0-9\.]+/g))
      accum = `$${obj.sandwiches[curr].pricePerItem} ${curr}`;
    return accum;
  }, `$${obj.sandwiches[Object.keys(obj.sandwiches)[0]].pricePerItem} ${Object.keys(obj.sandwiches)[0]}`);
};

/* #allcafeItems
 *
 * Takes in an object and returns key value pairs where the key is the category product (coffee, baked goods, etc) and the value is an array of strings. (eg. { category: ['']})
 *
 * @param {Object}
 * @return {String}
 * 
 */

var allcafeItems = (obj) => {
  return Object.keys(obj).reduce((accum, curr) => {
    accum[curr] = Object.keys(obj[curr]);
    return accum;
  }, {});
};

/* #halfOffSandwiches
 *
 * Takes in an 'array' and a 'number'. If the price of the item is greater than the 'number', return an object with the sandwich name as the key and the value as half the price of it's current price.
 *
 * @param {Array}
 * @return {Object}
 * 
 */

var halfOffSandwiches = (array, number) => {
  return Object.keys(array[0]).reduce((accum, curr) => {
    if (array[0][curr].pricePerItem > number) {
      array[0][curr].pricePerItem /= 2;
      accum[curr] = array[0][curr].pricePerItem;
    }
    return accum;
  }, {});
};

/* #getNoMeatSandwiches
 *
 * Takes in an array and returns an object of only sandwiches with no meat as an ingredient. The key is the name of the sandwich and the value is the price of the sandwich ( eg: { sandwich1: $5 } ).
 *
 * @param {Array}
 * @return {Object}
 * 
 */

var getNoMeatSandwiches = (array) => {
  return Object.keys(array[0]).reduce((accum, curr) => {
    if (!array[0][curr].ingredients.hasOwnProperty('meat'))
      accum[curr] = `$${array[0][curr].pricePerItem}`;
    return accum;
  }, {});
};

/* #updateCoffeeInventory
 *
 * Takes in an object, array, and number. Should return a new object with the property 'inStock' and 'ordered', set the value to an object with key as the coffee name and the value as the new amount.
 *
 * @param {Array}
 * @param {Array} amtToRemoveFromStock,
 * @param {Number} maxStock
 * @return {Object}
 * 
 */

var updateCoffeeInventory = (obj, arr, number) => {
  const res = {inStock: {}, ordered: {}};
  return obj.reduce((accum, curr, index) => {
    curr.inStock -= arr[index][Object.keys(arr[index])[0]];
    curr.ordered += arr[index][Object.keys(arr[index])[0]];
    accum.inStock[Object.keys(arr[index])[0]] = curr.inStock;
    accum.ordered[Object.keys(arr[index])[0]] = curr.ordered;
    return accum;
  }, res); 
};

/* #findCupOfCoffee
 *
 * Takes in an object and number. Returns a new object with the name of the coffee as the key and the value set to true if the cup of coffee cost less than or equal to number param.
 *
 * @param {Object} data
 * @param {Number} budget
 * @return {Object}
 * 
 */

var findCoffee = (obj, number) => {
  return Object.keys(obj.coffeeType).reduce((accum, curr) => {
    if (Number.parseFloat(obj.coffeeType[curr].pricePerCup.small) < number)
      accum[curr] = true;
    return accum;
  }, {})
};

/* #totalPopulation
 *
 * Takes in an object and returns the total sum of the all the places every user has lived.
 *
 * @param {Object} data
 * @return {Number} sum of population
 * 
 */

var totalPopulation = (data) => {
  return data.reduce((accum, curr) => {
    accum += Object.keys(curr[0].hometown.state).reduce((accum2, curr2) => {
      accum2 +=curr[0].hometown.state[curr2].population;
      return accum2;
    }, 0);
    accum += Object.keys(curr[1].currentLocation.state).reduce((accum2, curr2) => {
      accum2 += curr[1].currentLocation.state[curr2].population;
      return accum2;
    }, 0);
    return accum;
  }, 0)
};

/* #placesLived
 *
 * Takes in an object and returns a new object with 2 properties 'hometown' and 'currentLocation' and set the value to an object with the user's username as the key and the state as the value.
 * 
 * example:
 * { home: {person1: 'homeState'},
 * current: {person1: 'currState'}}
 *
 * @param {Object} data
 * @return {Object} user object containing their username, state of hometown and state of currentLocation
 * 
 */

var placesLived = (data) => {
  const res = {hometown: {}, currentLocation: {}};
  return data.reduce((accum, curr) => {
    accum.hometown[curr.username] = Object.keys(curr.citiesLived[0].hometown.state)[0];
    accum.currentLocation[curr.username] = Object.keys(curr.citiesLived[1].currentLocation.state)[0];
    return accum;
  }, res);
};

/* #addSchool
 *
 * Takes in 3 arguments 'data', 'newSchool', and 'tracks'. Returns the 'data' object with the 'newSchool' object added. Set 'tracks' value to an array of tracks offered.
 *
 * @param {Object} data
 * @return {Number} sum of population
 * 
 */

var addSchool = (data, newSchool, tracks) => {
  newSchool.jrDevLeagueAcademy.tracks = tracks;
  data[Object.keys(newSchool)[0]] = newSchool.jrDevLeagueAcademy;
  const res = {};
  return Object.keys(data).reduce((accum, curr) => {
    accum[curr] = Object.keys(data[curr]).reduce((accum2, curr2) => {
      if (curr2 !== 'tracks')
        accum2[curr2] = data[curr][curr2];
      else
        if (curr === 'devLeague')
          accum2[curr2] = Object.keys(data[curr][curr2]);
        else {
          accum2[curr2] = Object.keys(data[curr][curr2][0]);
        }
      return accum2;
    }, {});
    return accum;
  }, res);
};

/* #updateGitHubRank
 *
 * Takes in an object and a number. Returns a new object with a gitHubRank property set to an object with the rank of each language in the data object.
 *
 * @param {Object} dataObj
 * @return {Object}
 * 
 */

var updateGitHubRank = (data) => {
  const res = {gitHubRank: {}};
  return Object.keys(data).reduce((accum, curr) => {
    res.gitHubRank[curr] = data[curr].gitHubRank;
    return accum;
  }, res);
};

/* #top3rankedLang
 *
 * Takes in an object. Returns a new object with the property 'topRankingLanguages' and the value set to an object of the name of the language as the key and the number rank as the value.
 *
 * @param {Object} dataObj
 * @return {Object}
 * 
 */

var top3rankedLang = (data) => {
  const res = {topRankingLanguages: {}};
  return Object.keys(data).reduce((accum, curr) => {
    if (data[curr].gitHubRank > 0 && data[curr].gitHubRank <= 3)
      res.topRankingLanguages[curr] = data[curr].gitHubRank;
    return accum;
  }, res);
};

/* #removeIngredient
 *
 * Takes in an object and string. Returns a new object with the property 'availableBread' and the value set to an array of all available breads listed only once.
 *
 * @param {Object} dataObj
 * @param {String} removeIng
 * @return {Object}
 * 
 */

var removeIngredient = (data, string) => {
  const res = {availableBread: []};
  return Object.keys(data).reduce((accum, curr) => {
    for (bread of data[curr].ingredients.bread)
      if (bread !== string && !accum.availableBread.includes(bread))
        accum.availableBread.push(bread);
    return accum;
  }, res);
};

/* #removeIngredient
 *
 * Takes in an object and returns a new object with the key as the name of the item and the value set to the price.
 *
 * @param {Object} dataObj
 * @return {Object}
 * 
 */

var getPrices = (obj) => {
  return obj.reduce((accum, curr) => {
    return Object.keys(curr).reduce((accum2, curr2) => {
      accum2[curr2] = curr[curr2].pricePerItem;
      return accum2;
    }, accum);
  }, {})
};

/* #addName
 *
 * Takes in an object and array. Returns the object with each user's full name where the first element in the array belonging to the first user, second element belonging to the second user, etc...
 *
 * @param {Object} newObj
 * @param {Array} nameArray
 * @return {Object}
 * 
 */

var addName = (obj, arr) => {
  return Object.keys(obj).reduce((accum, curr, index) => {
    accum[curr] = arr[index];
    return accum;
  }, {});
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
  bigDataTrack: bigDataTrack,
  incrementAge: incrementAge,
  movieRatings: movieRatings,
  sumOfAllStudents: sumOfAllStudents,
  mapLanguageToCreator: mapLanguageToCreator,
  mapOccurrences: mapOccurrences,
  countLanguages: countLanguages,
  phoneNumber: phoneNumber,
  reverseStrings: reverseStrings,
  getAgeById: getAgeById,
  allTheStates: allTheStates,
  allTheMovies: allTheMovies,
  addCoffeeFlavor: addCoffeeFlavor,
  avgCoffeePrice: avgCoffeePrice,
  updateBakedGoodsPrice: updateBakedGoodsPrice,
  costOfCoffeeOnOrder: costOfCoffeeOnOrder,
  uniqueCoffeeFlavors: uniqueCoffeeFlavors,
  cheapestSandwich: cheapestSandwich,
  allcafeItems: allcafeItems,
  halfOffSandwiches: halfOffSandwiches,
  getNoMeatSandwiches: getNoMeatSandwiches,
  updateCoffeeInventory: updateCoffeeInventory,
  findCoffee: findCoffee,
  totalPopulation: totalPopulation,
  placesLived: placesLived,
  addSchool: addSchool,
  updateGitHubRank: updateGitHubRank,
  top3rankedLang: top3rankedLang,
  removeIngredient: removeIngredient,
  getPrices: getPrices,
  addName: addName
};