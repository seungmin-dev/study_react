class Human {
    constructor(name, lastName) {
        this.name = name; // this는 이 코드가 포함된 class를 지칭
        this.lastName = lastName;
    }
}

class Baby extends Human {
    cry() {
        console.log("Waaaa");
    }
    sayName() {
        console.log(`My name is ${this.name}`); // 상위 class인 Human의 속성을 상속받음
    }
}

const myBaby = new Baby("mini", "me");

console.log(myBaby);
// ->Baby {name: "mini", lastName: "me", constructor: Object}

console.log(myBaby.cry());
// ->Waaaa 

console.log(myBaby.sayName());
// ->My name is mini 