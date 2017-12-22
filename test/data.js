var users = {
  data: {
    id: {
      "1": {
        username: "user1",
        age: 32,
        admin: false,
        citiesLived: [{
            hometown: {
              state: {
                louisiana: {
                  city: "New Orleans",
                  population: 391495
                }
              }
            }
          },
          {
            currentLocation: {
              state: {
                hawaii: {
                  city: "Honolulu",
                  population: 402694
                }
              }
            }
          }
        ],
        favoriteMovies: [
          "Star Wars",
          "The Empire Strikes Back",
          "Return of the Jedi"
        ],
        favoriteBook: {
          title: "Eloquent Javascript",
          author: "Marijn Haverbeke"
        }
      },
      "2": {
        username: "user2",
        age: 29,
        admin: true,
        citiesLived: [{
            hometown: {
              state: {
                washington: {
                  city: "Seattle",
                  population: 704352
                }
              }
            }
          },
          {
            currentLocation: {
              state: {
                california: {
                  city: "San Francisco",
                  population: 870887
                }
              }
            }
          }
        ],
        favoriteMovies: [
          "The Fellowship of the Ring",
          "The Two Towers",
          "The Return of the King"
        ],
        favoriteBook: {
          title: "You Dont Know JS",
          author: "Kyle Simpson"
        }
      },
      "3": {
        username: "user3",
        age: 40,
        admin: false,
        citiesLived: [{
            hometown: {
              state: {
                montana: {
                  city: "Missoula",
                  population: 72364
                }
              }
            }
          },
          {
            currentLocation: {
              state: {
                newYork: {
                  city: "New York City",
                  population: 8500000
                }
              }
            }
          }
        ],
        favoriteMovies: ["Ghostbusters", "Napolean Dynamite"],
        favoriteBook: {
          title: "Clean Code",
          author: "Robert Martin"
        }
      }
    }
  }
};

var schools = {
  devLeague: {
    address: "2800 Woodlawn Dr",
    phoneNumber: "(808) 738-6406",
    tracks: {
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
      ]
    }
  }
};

var languages = {
  javascript: {
    yearCreated: 1995,
    createdBy: "Brendan Eich",
    gitHubRank: 1
  },
  python: {
    yearCreated: 1989,
    createdBy: "Guido van Rossum",
    gitHubRank: 2
  },
  java: {
    yearCreated: 1995,
    createdBy: "James Gosling",
    gitHubRank: 3
  },
  c: {
    yearCreated: 1972,
    createdBy: "Dennis Ritchie",
    gitHubRank: 10
  },
  elixir: {
    yearCreated: 2011,
    createdBy: "Jose Valim",
    gitHubRank: 5
  },
  ruby: {
    yearCreated: 1993,
    createdBy: "Yukihiro Matsumoto",
    gitHubRank: 4
  }
};

var cafe = {
  coffeeType: {
    kona: {
      pricePerPound: 20,
      pricePerCup: {
        small: 3,
        medium: 3.75,
        large: 4.25
      },
      flavors: [
        "original",
        "caramel",
        "hazelnut",
        "macadamia nut",
        "french vanilla",
        "dark chocolate"
      ],

      inStock: 13,
      ordered: 7
    },
    kau: {
      pricePerPound: 35,
      pricePerCup: {
        small: 3.5,
        medium: 4,
        large: 4.5
      },
      flavors: [
        "hazelnut",
        "vanilla",
        "macadamia nut",
        "original",
        "dark chocolate"
      ],
      inStock: 18,
      ordered: 2
    },
    ethiopian: {
      pricePerPound: 58,
      pricePerCup: {
        small: 4.25,
        medium: 4.75,
        large: 5.25
      },
      flavors: ["french vanilla", "blueberry", "cinnamon", "dark chocolate"],
      inStock: 9,
      ordered: 11
    }
  },
  bakedGoods: {
    muffins: {
      flavors: ["chocolate", "blueberry", "banana"],
      pricePerItem: 2.5
    },
    cookies: {
      flavors: ["chocolate chip", "snickerdoodle", "peanutButter", "sugar"],
      pricePerItem: 1.75
    }
  },
  sandwiches: {
    pbj: {
      pricePerItem: 2,
      ingredients: {
        bread: ["white", "wheat", "sweet"],
        peanutButter: "skippy",
        jelly: ["grape", "strawberry", "peaches"]
      }
    },
    grilledChicken: {
      pricePerItem: 5.5,
      ingredients: {
        bread: ["white", "wheat", "flatbread"],
        vegetables: ["lettuce", "tomato", "onions"],
        meat: ["chicken"]
      }
    },
    tomatoPesto: {
      pricePerItem: 4,
      ingredients: {
        bread: ["flatbread"],
        vegetables: ["tomato", "basil"],
        cheese: ["mozzarella"],
        sauce: ["pesto"]
      }
    },
    pastrami: {
      pricePerItem: 5.5,
      ingredients: {
        bread: ["rye"],
        meat: ["beef"],
        sauce: ["mustard"],
        vegetables: ["onions", "dill pickles"],
        cheese: ["havarti"]
      }
    },
    meatball: {
      pricePerItem: 5.5,
      ingredients: {
        bread: ["white", "wheat"],
        meat: ["meatballs"],
        cheese: ["swiss", "cheddar", "provolone"]
      }
    },
    grilledCheese: {
      pricePerItem: 3,
      ingredients: {
        bread: ["white", "wheat", "sweet"],
        cheese: ["cheddar", "swiss", "pepperjack", "provolone"]
      }
    }
  }
};

module.exports = {
  users,
  schools,
  languages,
  cafe
};