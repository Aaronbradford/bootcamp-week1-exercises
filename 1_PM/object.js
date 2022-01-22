const assert = require('assert')


/**
 * Complete the function such that it returns true if an object or any of its
 * subobjects have any falsy values and false otherwise.
 * HINT: Recursion may help here
 * HINT 2: Get the truthiness of a value by using a double bang (!!),
 *    or the untruthiness using a single bang (!)
 */

const hasFalsyValue = obj => {
  let result = false;
  for (let i = 0; i < Object.values(obj).length; i++) {
    if (typeof Object.values(obj)[i] == 'object') {
      result = hasFalsyValue(Object.values(obj)[i]);
    }
    else if (Object.values(obj)[i] == false)
    {
      result = true;
    }
  }
  return result;
  // Object.keys(obj).forEach(key => {
  //   let result = false;
  //   if (!obj[key]) {
  //     result = true;
  //   }
  //   else {
  //     hasFalsyValue(obj[key]);
  //   }
  // });
  // return result;
};

const falsyObj = {
  hi: "I am falsy somewhere...",
  "i'm an number": 23,
  "i'm a boolean": true,
  "i'm an object": {
    aint: 'nuthin to look at here...',
    keeplooking: {
      oops: 0
    }
  }
};

const truthyObj = {
  truthy: true,
  stillTruthy: -1,
  yup: "this is truthy",
  anotherOne: {
    anotherTruthy: ";)"
  }
};

// console.log(hasFalsyValue(falsyObj));

assert(hasFalsyValue(falsyObj) === true);
assert(hasFalsyValue(truthyObj) === false);
