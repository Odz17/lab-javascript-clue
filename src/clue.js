// Define suspectsArray
const suspectsArray = [
    {
      firstName: "Jacob",
      lastName: "Green",
      occupation: "Doctor",
      age: 45,
      description: "He has a lot of connections",
      image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
      color: "Green",
    },
    {
      firstName: "Doctor",
      lastName: "Orchid",
      occupation: "Scientist",
      age: 26,
      description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
      image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
      color: "White",
     },
     {
      firstName: "Victor",
      lastName: "Plum",
      occupation: "Designer",
      age: 22,
      description: "Billionaire video game designer",
      image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
      color: "Purple",
     },
     {
      firstName: "Kasandra",
      lastName: "Scarlet",
      occupation: "Actor",
      age: 31,
      description: "She is an A-list movie star with a dark past",
      image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
      color: "Red",
     },
     {
      firstName: "Eleanor",
      lastName: "Peacock",
      occupation: "Socialité",
      age: 36,
      description: "She is from a wealthy family and uses her status and money to earn popularity",
      image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
      color: "Blue",
     },
     {
      firstName: "Jack",
      lastName: "Mustard",
      occupation: "Retired Football player",
      age: 62,
      description: "He is a former football player who tries to get by on his former glory",
      image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
      color: "Yellow",
     },
    
    
  ];
  
  
  const weaponsArray = [
    {
      name: "knife",
      weight: 8,
    },
    {
      name: "rope",
      weight: 10,
    },
    {
      name: "candelestick",
      weight: 2,
    },
    {
      name: "dumbbell",
      weight: 30,
    },
    {
      name: "poison",
      weight: 2,
    },
    {
      name: "axe",
      weight: 15,
    },
    {
      name: "bat",
      weight: 13,
    },
    {
      name: "trophy",
      weight: 25,
    },
    {
      name: "pistol",
      weight: 20,
    },
    
  ];
  
  
  const roomsArray = [
    {
      name: "Kitchen"  
    },
    {
      name: "Bedroom",
    },
    {
      name: "Bathroom",
    },
    {
      name: "Master Bedroom",
    },
    {
      name: "Deck",
    },
    {
      name: "Garage",
    },
    {
      name: "Saloon",
    },
    {
      name: "Office",
    }, 
    {
      name: "Backyard",
    },
    {
      name: "Theater",
    },
    {
      name: "Study",
    },
    {
      name: "Spa",
    },
    {
      name: "Observatory",
    },
    {
      name: "BilliardRoom",
    },
    {
      name: "Hall",
    },    


      ];
 
  function selectRandom(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    if (arr.length === 1) {
      return arr[0];
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  function pickMystery() {
    const suspect = selectRandom(suspectsArray);
    const weapon = selectRandom(weaponsArray);
    const room = selectRandom(roomsArray);
  
    return { suspect, weapon, room };
  }
  
  function revealMystery(mystery) {
    const { suspect, weapon, room } = mystery;
    return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
  }
  
  // Example usage:
  const mystery = pickMystery();
  const solution = revealMystery(mystery);
  console.log(solution);
  

