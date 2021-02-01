// let posts = ["Hi", "Hello", "Bye"];
// posts.forEach(post => console.log(post));

// forEach 는 각각의 아이템에 대해 어떠한 실행'만' 함
// map은 실행 후 새로운 배열을 반환

let greetings = ["Hi", "Howdy", "Suup"];
if( !greetings.includes("Hello") ) { //Hello가 없으면 Hello를 추가
    greetings.push("Hello");
}

console.log(greetings);
// ->["Hi", "Howdy", "Suup", "Hello"] Hello가 가장 뒤로 감
