const database = {
  users: [
    {
      id: 0,
      firstName: 'Alice',
      favPet: 'cat',
      state: 'NY',
      collegeId: 2,
    },
    {
      id: 1,
      firstName: 'Bob',
      favPet: 'cat',
      state: 'MA',
      collegeId: 0,
    },
    {
      id: 2,
      firstName: 'Charles',
      favPet: 'dog',
      state: 'NY',
      collegeId: 0,
    },
    {
      id: 3,
      firstName: 'Daniela',
      favPet: 'dog',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 4,
      firstName: 'Edward',
      favPet: 'cat',
      state: 'CT',
      collegeId: 1,
    },
    {
      id: 5,
      firstName: 'Fatima',
      favPet: 'dog',
      state: 'NJ',
      collegeId: 0,
    },
  ],
  friends: [
    {
      id1: 0,
      id2: 2,
    },
    {
      id1: 1,
      id2: 0,
    },
    {
      id1: 2,
      id2: 3,
    },
    {
      id1: 2,
      id2: 1,
    },
    {
      id1: 3,
      id2: 4,
    },
    {
      id1: 2,
      id2: 4,
    },
    {
      id1: 0,
      id2: 5,
    },
  ],
  college: [
    {
      id: 0,
      name: 'Harvard',
      state: 'MA',
      color: 'crimson',
    },
    {
      id: 1,
      name: 'Yale',
      state: 'CT',
      color: 'blue',
    },
    {
      id: 2,
      name: 'Columbia',
      state: 'NY',
      color: 'light blue',
    },
  ],
}

/* using the js object and array methods, query the database defined above.
Assume that the data in the database is dynamic and changes every day so
dont hard code solutions. */

// Implement the function usersByPet to return a list of user objects filtered by cat or dog.
const usersByPet = pet => {
  const {users} = database;
  let filtered = []
  for (let i = 0; i < users.length; i++){
    if (users[i].favPet == pet) {
      filtered.push(users[i])
    }
  }

  // const {users, friends, college} = database;
  // let filtered = []
  // users.forEach(element => {
  //   if (element.favPet == pet) {
  //     filtered.push(element);
  //   }
  // });
  return filtered;
};
console.log(usersByPet('dog'))
console.log(usersByPet('cat'))

// Implement the function collegeLookup to return the name and color of a user's college.
const collegeLookup = user => {
  const {users, college} = database;
  let result = [];
  users.forEach(element => {
    if (element.firstName == user) {
      college.forEach(thing => {
        if (thing.id == element.collegeId) {
          result.push(thing.name, thing.color);
        }
        return result;
      });
    }
    return result;
  });
  return result;
}
console.log(collegeLookup('Charles'))
console.log(collegeLookup('Daniela'))

// define oppositesAttract as a list of friend objects whose favorite pets are different.
let friend_list = [];
let pet1 = "";
let pet2 = "";
database.friends.forEach(friend => {
  database.users.forEach(user => {
    if (friend.id1 == user.id) {
      // console.log("hello");
      pet1 = user.favPet;
    }
    else if (friend.id2 == user.id) {
      pet2 = user.favPet;
    }
  });
  if (pet1 == pet2) {
    friend_list.push(friend);
  }
});

const oppositesAttract = friend_list;
console.log(oppositesAttract)



// define local as a list of users who live in the same state as they go to school.
let user_list = [];
database.users.forEach(user => {
  database.college.forEach(college => {
    if (user.collegeId == college.id) {
      if (user.state == college.state) {
        user_list.push(user.firstName);
      }
    }
  });
});

const local = user_list
console.log(local)

// define collegeFriends as a list of friend objects that go to the same college
let best_friend_list = [];
let college1 = "";
let college2 = "";
database.friends.forEach(friend => {
  database.users.forEach(user => {
    if (friend.id1 == user.id) {
      database.college.forEach(college => {
        if (user.collegeId == college.id) {
          college1 = college.name;
        }
      });
    }
    else if (friend.id2 == user.id) {
      database.college.forEach(college => {
        if (user.collegeId == college.id) {
          college2 = college.name;
        }
      });
    }
  });
  if (college1 == college2) {
    best_friend_list.push(friend);
  }
});

const collegeFriends = best_friend_list
console.log(collegeFriends)
