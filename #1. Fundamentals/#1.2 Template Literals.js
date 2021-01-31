function sayHello(name = "Human") { //함수에서 파라미터 값의 default를 지정할 수 있음
    //name의 값이 없으면 Human으로
    //name의 값이 지정되어서 들어오면 그 값으로 출력됨
    return "Hello " + name;
}
// 위의 함수와 동일한 코드
const sayHello = (name = "Human") => `Hello ${name}` // backticks 사용해서 편리한 코딩
// arrow function은 이벤트를 추가하거나 익명함수를 만들 때 용이함

const seungmin = sayHello();

console.log(seungmin);