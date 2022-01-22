/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */

/* Variables, i.e.
const noun1 = ______
const verb1 = ______

Change thses values to generate a different story
*/

// const name1 = "Johnny";
// const activity1 = "Karate";
// const quantity1 = 7;
// const male_celebrity_1 = "Tom Holland";
// const place1 = "Frozen yogurt shop";
// const noun1 = "Celery stick"

const story = (name1, activity1, quantity1, male_celebrity_1, place1, noun1, male_celebrity_2, noun2) => {return `There was a little boy named ${name1} and he loved to do ${activity1}. When he first started, he really wanted to improve so he would train for up to ${quantity1} hours per day. Once, after a particularly hard day of training, ${male_celebrity_1} walked into the ${place1} where ${name1} trained and asked him for a ${noun1}. The boy quickly beat him up because his was a much bigger fan of ${male_celebrity_2} and he thought ${noun2} is much better than a ${noun1}.
`};

console.log(story("Johnny", "Karate", 7, "Tom Holland", "Frozen Yogurt Shop", "Celery Stick", "Andrew Garfield", "Ice Cream"));
