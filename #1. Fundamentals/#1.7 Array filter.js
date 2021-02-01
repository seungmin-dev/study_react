const array = [1, 42, 53, 2, 64, 13, 7, 32, 16];

// const biggerThan15 = numbers.filter(number => number > 15);
// array에서 filter 조건에 해당하는 값들을 담은 array를 반환
// arrow function은 조건에 대한 true/false를 반환

const testCondition = number => number > 15;
const biggerThan15 = numbers.filter(testCondition);
console.log(biggerThan15);

let posts = ["Hi", "Hello", "Bye"];
posts = posts.filter(post => post != "Bye");
console.log(posts);
// -> ["Hi", "Hello"]