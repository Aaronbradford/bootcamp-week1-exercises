/**
 * Part 1:
 *    What will print and why? It will print 1 and then 2 and then undefined because a is being set to 1, printed through console.log() and then through the function y(), set to 2 and printed using console.log(). Since y() calls x() inside it, it also sets a without and value and then prints it through console.log().
 *    What will change if we delete line 15? Why? The code will print 1 then 2 then 1 because it follows the same line of reasoning as before, but this time there is no line setting a to no value, and thus x() will use the global value of a, which is 1.
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

const x = () => {
  let a = 2;
  console.log(a);
}

const y = () => {
  a = 2;
  console.log(a);
  x();
}

a = 1;
console.log(a);
y();
