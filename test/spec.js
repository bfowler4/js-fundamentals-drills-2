var nestedData = require("./data.js");

var expect = require("chai").expect;
var func = require("../exercises.js");

describe("JS Fundamental Drills", function () {
  it("#getAllUsernames is a function that takes in an object and returns an array of all usernames.", function () {
    var getUsernames = func.getAllUsernames(nestedData.users);
    expect(getUsernames).to.deep.equal(["user1", "user2", "user3"]);
  });
  it("#hometownCity is a function that takes in an array and returns a string of the users hometown city.", function () {
    var cityName = func.hometownCity(nestedData.users.data.id["3"].citiesLived);
    expect(cityName).to.deep.equal("Missoula");
  });
  it("#usersCurrentState is a function that takes 2 arguments 'data' and 'usernames' and returns a new object with the username as the key and the user's current state as the value.", function () {
    var states = func.usersCurrentState(
      [
        nestedData.users.data.id["1"].citiesLived,
        nestedData.users.data.id["2"].citiesLived,
        nestedData.users.data.id["3"].citiesLived
      ], ["user1", "user2", "user3"]
    );
    expect(states).to.deep.equal({
      user1: {
        hawaii: {
          city: "Honolulu",
          population: 402694
        }
      },
      user2: {
        california: {
          city: "San Francisco",
          population: 870887
        }
      },
      user3: {
        newYork: {
          city: "New York City",
          population: 8500000
        }
      }
    });
  });
  it("#findAdmin is a function that takes in an object and returns the username of the admin", function () {
    var admin = func.findAdmin(nestedData.users);
    expect(admin).to.deep.equal("user2");
  });
  it("#addNewMovie is a function that takes in 3 arguments 'data', 'id', 'newMovie'. Returns an array of movie titles.", function () {
    var newMovie = func.addNewMovie(nestedData.users, 2, "The Hobbit");
    expect(newMovie).to.deep.equal([
      "The Fellowship of the Ring",
      "The Two Towers",
      "The Return of the King",
      "The Hobbit"
    ]);
  });
  it("#favoriteBooks is a function that takes in an object and returns an array containing an object with the users favorite books with the author as the key and the title as the value.", function () {
    var favBooks = func.favoriteBooks(nestedData.users);
    expect(favBooks).to.deep.equal([{
      "Kyle Simpson": "You Dont Know JS",
      "Marijn Haverbeke": "Eloquent Javascript",
      "Robert Martin": "Clean Code"
    }]);
  });
  it("#countTracks is a function that takes in an object and returns the number amount of tracks offered.", function () {
    var numberOfTracks = func.countTracks(nestedData.schools);
    expect(numberOfTracks).to.deep.equal(3);
  });
  it("#fullTimeStatus is a function that takes in 2 arguments 'data' and 'trackName' and changes the selected track full time status to true.", function () {
    var setToTrue = func.fullTimeStatus(
      nestedData.schools.devLeague.tracks,
      "cyberSecurity"
    );
    expect(setToTrue).to.deep.equal({
      offered: true,
      currentStudents: 0
    });
  });
  it("#newTrack is a function that takes in 3 arguments 'data', 'array', and 'string'. Returns an object with a new track with the 'string' as the key and the 'array' as the value.", function () {
    var addTrack = func.newTrack(
      nestedData.schools.devLeague.tracks, [
        [{
            fullTime: {
              offered: false,
              currentStudents: 0
            }
          },
          {
            partTime: {
              offered: true,
              currentStudents: 5
            }
          }
        ]
      ],
      "enterprise"
    );
    expect(addTrack).to.deep.equal({
      javascript: [{
          fullTime: {
            offered: true,
            currentStudents: 10
          }
        },
        {
          partTime: {
            offered: true,
            currentStudents: 12
          }
        }
      ],
      cyberSecurity: [{
          fullTime: {
            offered: true,
            currentStudents: 0
          }
        },
        {
          partTime: {
            offered: true,
            currentStudents: 5
          }
        }
      ],
      bigData: [{
          fullTime: {
            offered: false,
            currentStudents: 0
          }
        },
        {
          partTime: {
            offered: true,
            currentStudents: 5
          }
        }
      ],
      enterprise: [{
          fullTime: {
            offered: false,
            currentStudents: 0
          }
        },
        {
          partTime: {
            offered: true,
            currentStudents: 5
          }
        }
      ]
    });
  });
  it("#bigDataTrack is a function that takes in 2 arguments 'data' and 'trackName' and changes the selected track full time status to true and doubles the amount of current students attending.", function () {
    var track = func.bigDataTrack(nestedData.schools.devLeague, "bigData");
    expect(track).to.deep.equal({
      bigData: {
        offered: true,
        currentStudents: 10
      }
    });
  });
  it("#incrementAge is a function that takes in 2 arrays where each index in the first array is the value and each index in the the second array is the key, and returns an object {key1: val1, key2:val2, key3:val3}", function () {
    var increment = func.incrementAge(
      [
        nestedData.users.data.id["1"].age,
        nestedData.users.data.id["2"].age,
        nestedData.users.data.id["3"].age
      ], ["user1", "user2", "user3"]
    );
    expect(increment).to.deep.equal({
      user1: 32,
      user2: 29,
      user3: 40
    });
  });
  it("#movieRatings is a function that takes in 2 arguments where the first argument is the key and second argument is the value {key1: val1, key2:val2, key3:val3, etc...}", function () {
    var ratings = func.movieRatings(
      [
        nestedData.users.data.id["1"].favoriteMovies,
        nestedData.users.data.id["2"].favoriteMovies,
        nestedData.users.data.id["3"].favoriteMovies
      ], [9.5, 8, 8.6, 9, 8.9, 9.4, 7.8, 8.3, 7.5]
    );
    expect(ratings).to.deep.equal({
      "Star Wars": 9.5,
      "The Empire Strikes Back": 8,
      "Return of the Jedi": 8.6,
      "The Fellowship of the Ring": 9,
      "The Two Towers": 8.9,
      "The Return of the King": 9.4,
      "The Hobbit": 7.8,
      "Ghostbusters": 8.3,
      "Napolean Dynamite": 7.5
    });
  });
  it("#sumOfAllStudents is a function that takes in an object and returns the sum of all currently enrolled students.", function () {
    var sum = func.sumOfAllStudents(nestedData.schools.devLeague.tracks);
    expect(sum).to.deep.equal(47);
  });
  it("#mapLanguageToCreator is a function that takes in 3 arguments 'data', 'createdBy', and 'year' and returns key-value pairs { name: language }.", function () {
    var mapToCreator = func.mapLanguageToCreator(
      nestedData.languages, ["Brendan Eich", "James Gosling"],
      1995
    );
    expect(mapToCreator).to.deep.equal({
      "Brendan Eich": "javascript",
      "James Gosling": "java"
    });
  });
  it("#mapOccurrences is a function that takes in an object and returns key-value pairs that count how many languages were created in given years { 2017: 1 }.", function () {
    var frequency = func.mapOccurrences(nestedData.languages);
    expect(frequency).to.deep.equal({
      "1972": 1,
      "1989": 1,
      "1993": 1,
      "1995": 2,
      "2011": 1
    });
  });
  it("#countLanguages is a function that takes in an object and returns the number of languages in the dataset.", function () {
    var countLang = func.countLanguages(nestedData.languages);
    expect(countLang).to.deep.equal(6);
  });
  it("#phoneNumber is a function that takes in a string and returns only the numbers in an array.", function () {
    var getNums = func.phoneNumber(nestedData.schools.devLeague.phoneNumber);
    expect(getNums).to.deep.equal([8, 0, 8, 7, 3, 8, 6, 4, 0, 6]);
  });
  it("#reverseStrings is a function that takes in an object and returns the names of the tracks offered reversed.", function () {
    var reverseStr = func.reverseStrings(nestedData.schools);
    expect(reverseStr).to.deep.equal([
      "tpircsavaj",
      "ytiruceSrebyc",
      "ataDgib",
      "esirpretne"
    ]);
  });
  it("#getAgeById is a function that takes in an object and returns an array with the user's username and age.", function () {
    var ageById = func.getAgeById(nestedData.users, 3);
    expect(ageById).to.deep.equal(["user3", 40]);
  });
  it("#allTheStates is a function that takes in an object and returns an array with all of the state names of where user's have lived. ", function () {
    var states = func.allTheStates([
      nestedData.users.data.id["1"],
      nestedData.users.data.id["2"],
      nestedData.users.data.id["3"]
    ]);
    expect(states).to.deep.equal([
      "louisiana",
      "hawaii",
      "washington",
      "california",
      "montana",
      "newYork"
    ]);
  });
  it("#allTheMovies is a function that takes in an object and returns an array of strings with all the names of each user's favorite movies.", function () {
    var allMovies = func.allTheMovies([
      nestedData.users.data.id["1"],
      nestedData.users.data.id["2"],
      nestedData.users.data.id["3"]
    ]);
    expect(allMovies).to.deep.equal([
      "Star Wars",
      "The Empire Strikes Back",
      "Return of the Jedi",
      "The Fellowship of the Ring",
      "The Two Towers",
      "The Return of the King",
      "The Hobbit",
      "Ghostbusters",
      "Napolean Dynamite"
    ]);
  });
  it("#addCoffeeFlavor is a function that takes in 2 arguments 'data' and 'number'. Returns the average price of coffee based on total/number. ", function () {
    var newFlavor = func.addCoffeeFlavor(
      nestedData.cafe.coffeeType,
      "pumpkin spice"
    );
    expect(newFlavor).to.deep.equal({
      kona: [
        "original",
        "caramel",
        "hazelnut",
        "macadamia nut",
        "french vanilla",
        "dark chocolate",
        "pumpkin spice"
      ],
      kau: [
        "hazelnut",
        "vanilla",
        "macadamia nut",
        "original",
        "dark chocolate",
        "pumpkin spice"
      ],
      ethiopian: [
        "french vanilla",
        "blueberry",
        "cinnamon",
        "dark chocolate",
        "pumpkin spice"
      ]
    });
  });
  it("#avgCoffeePrice is a function that takes in 2 arguments 'data' and 'number'. Returns the average price of coffee based on total/number. ", function () {
    var avgPrice = func.avgCoffeePrice(nestedData.cafe.coffeeType, 3);
    expect(avgPrice).to.deep.equal(38);
  });
  it("#updateBakedGoodsPrice is a function that takes in 2 arguments 'data' and 'discountedPrice' and returns the data object with the new discountedPrice of all bakedGoods.", function () {
    var updatePrice = func.updateBakedGoodsPrice(nestedData.cafe, 1);
    expect(updatePrice).to.deep.equal({
      muffins: {
        flavors: ["chocolate", "blueberry", "banana"],
        pricePerItem: 1
      },
      cookies: {
        flavors: ["chocolate chip", "snickerdoodle", "peanutButter", "sugar"],
        pricePerItem: 1
      }
    });
  });
  it("#costOfCoffeeOnOrder is a function that takes in an object and returns the total cost of all coffee's on order.", function () {
    var onOrderCost = func.costOfCoffeeOnOrder(nestedData.cafe.coffeeType);
    expect(onOrderCost).to.deep.equal(848);
  });
  it("#uniqueCoffeeFlavors is a function that takes ", function () {
    var noDupeFlavors = func.uniqueCoffeeFlavors([
      nestedData.cafe.coffeeType.kona.flavors,
      nestedData.cafe.coffeeType.kau.flavors,
      nestedData.cafe.coffeeType.ethiopian.flavors
    ]);
    expect(noDupeFlavors).to.deep.equal([
      "original",
      "caramel",
      "hazelnut",
      "macadamia nut",
      "french vanilla",
      "dark chocolate",
      "pumpkin spice",
      "vanilla",
      "blueberry",
      "cinnamon"
    ]);
  });
  it("#cheapestSandwich is a function that takes in an object and returns a string with the price of the cheapest sandwich and the name of the sandwich. (eg. '$1 sandwichName')", function () {
    var cheapest = func.cheapestSandwich(nestedData.cafe);
    expect(cheapest).to.deep.equal("$2 pbj");
  });
  it("#allcafeItems is a function ", function () {
    var items = func.allcafeItems(nestedData.cafe);
    expect(items).to.deep.equal({
      coffeeType: ["kona", "kau", "ethiopian"],
      bakedGoods: ["muffins", "cookies"],
      sandwiches: [
        "pbj",
        "grilledChicken",
        "tomatoPesto",
        "pastrami",
        "meatball",
        "grilledCheese"
      ]
    });
  });
  it("#halfOffSandwiches is a function that takes in an array and a number. If the price of the item is greater than 5 return an object with the key as the name of the sandwich and the value as half the price of it's current price.", function () {
    var halfPrice = func.halfOffSandwiches([nestedData.cafe.sandwiches], 5);
    expect(halfPrice).to.deep.equal({
      grilledChicken: 2.75,
      pastrami: 2.75,
      meatball: 2.75
    });
  });
  it("#getNoMeatSandwiches is a function that takes in an array and returns an object of only sandwiches with no meat as an ingredient. The key is the name of the sandwich and the value is the price of the sandwich ( eg: { sandwich1: $5 } ).", function () {
    var noMeat = func.getNoMeatSandwiches([nestedData.cafe.sandwiches]);
    expect(noMeat).to.deep.equal({
      pbj: "$2",
      tomatoPesto: "$4",
      grilledCheese: "$3"
    });
  });
  it("#updateCoffeeInventory is a function that takes in an object, array, and number. Should return a new object with the property 'inStock' and 'ordered', set the value to an object with key as the coffee name and the value as the new amount.", function () {
    var update = func.updateCoffeeInventory(
      [
        nestedData.cafe.coffeeType.kona,
        nestedData.cafe.coffeeType.kau,
        nestedData.cafe.coffeeType.ethiopian
      ], [{
          kona: 4
        },
        {
          kau: 6
        },
        {
          ethiopian: 5
        }
      ],
      20
    );
    expect(update).to.deep.equal({
      inStock: {
        kona: 9,
        kau: 12,
        ethiopian: 4
      },
      ordered: {
        kona: 11,
        kau: 8,
        ethiopian: 16
      }
    });
  });
  it("#findCoffee is a function that takes in an object and number. Returns a new object with the name of the coffee as the key and the value set to true if the cup of coffee cost less than or equal to number param.", function () {
    var getCoffeeType = func.findCoffee(nestedData.cafe, 4);
    expect(getCoffeeType).to.deep.equal({
      kona: true,
      kau: true
    });
  });
  it("#totalPopulation is a function that takes in in an object and returns the total sum of the all the places every user has lived.", function () {
    var sum = func.totalPopulation([
      nestedData.users.data.id["1"].citiesLived,
      nestedData.users.data.id["2"].citiesLived,
      nestedData.users.data.id["3"].citiesLived
    ]);
    expect(sum).to.deep.equal(10941792);
  });
  it("#placesLived is a function", function () {
    var places = func.placesLived([
      nestedData.users.data.id["1"],
      nestedData.users.data.id["2"],
      nestedData.users.data.id["3"]
    ]);
    expect(places).to.deep.equal({
      hometown: {
        user1: "louisiana",
        user2: "washington",
        user3: "montana"
      },
      currentLocation: {
        user1: "hawaii",
        user2: "california",
        user3: "newYork"
      }
    });
  });
  it("#addSchool is a function that takes in 3 arguments 'data', 'newSchool', and 'tracks'. Returns the 'data' object with the 'newSchool' object added. Set 'tracks' value to an array of tracks offered.", function () {
    var newSchool = func.addSchool(
      nestedData.schools, {
        jrDevLeagueAcademy: {
          tracks: {}
        }
      }, [{
        jsWebDev: {
          students: 5
        },
        unity3dGameDev: {
          students: 6
        }
      }]
    );
    expect(newSchool).to.deep.equal({
      devLeague: {
        address: "2800 Woodlawn Dr",
        phoneNumber: "(808) 738-6406",
        tracks: ["javascript", "cyberSecurity", "bigData", "enterprise"]
      },
      jrDevLeagueAcademy: {
        tracks: ["jsWebDev", "unity3dGameDev"]
      }
    });
  });
  it("#updateGitHubRank is a function that takes in an object and a number. Returns a new object with a gitHubRank property set to an object with the rank of each language in the data object.", function () {
    var updateRank = func.updateGitHubRank(nestedData.languages, 5);
    expect(updateRank).to.deep.equal({
      gitHubRank: {
        javascript: 1,
        python: 2,
        java: 3,
        c: 10,
        elixir: 5,
        ruby: 4
      }
    });
  });
  it("#top3rankedLang is a function that takes in an object. Returns a new object with the property 'topRankingLanguages' and the value set to an object of the name of the language as the key and the number rank as the value.", function () {
    var topLang = func.top3rankedLang(nestedData.languages);
    expect(topLang).to.deep.equal({
      topRankingLanguages: {
        javascript: 1,
        python: 2,
        java: 3
      }
    });
  });
  it("#removeIngredient is a function that takes in an object and string. Returns a new object with the property 'availableBread' and the value set to an array of all available breads listed only once.", function () {
    var removeIng = func.removeIngredient(nestedData.cafe.sandwiches, 'white');
    expect(removeIng).to.deep.equal({
      availableBread: ['wheat', 'sweet', 'flatbread', 'rye']
    });
  });
  it("#getPrices is a function that takes in an object and returns a new object with the key as the name of the item and the value set to the price.", function () {
    var allPrices = func.getPrices(
      [nestedData.cafe.sandwiches, nestedData.cafe.bakedGoods]
    );
    expect(allPrices).to.deep.equal({
      pbj: 2,
      grilledChicken: 2.75,
      tomatoPesto: 4,
      pastrami: 2.75,
      meatball: 2.75,
      grilledCheese: 3,
      muffins: 1,
      cookies: 1
    });
  });

  it("#addName is a function that takes in an object and array. Returns the object with each user's full name where the first element in the array belonging to the first user, second element belonging to the second user, etc...", function () {
    var giveName = func.addName({
      user1: '',
      user2: '',
      user3: ''
    }, ["Edgar Allen Poe", "Mary Oliver", "Ernest Hemmingway"]);
    expect(giveName).to.deep.equal({
      user1: 'Edgar Allen Poe',
      user2: 'Mary Oliver',
      user3: 'Ernest Hemmingway'
    });
  });


});