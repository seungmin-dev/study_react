const human = {
    name : "seungmin",
    lastName : "Lee",
    nationality : "Korean",
    favFood : {
        breakfast : "bread",
        lunch : "kimbap",
        dinner : "meat"
    }
}

// const name = human.name;
// const lastName = human.lastName;
// 각각의 변수를 지정하고 같은 이름의 배열 값을 넣는 것은 비효율적!

// const { name, lastName } = human;
// 위의 코드와 동일!

// const { name, lastName, nationality:difName } = human;
// nationality 값은 가져오지만 동일한 변수명을 사용하고 싶지 않을 때

const { name, lastName, nationality : difName, favFood:{dinner, lunch, breakfast} } = human;
// 배열 안의 배열 값도 쉽게 가져올 수 있음

console.log(name, lastName, difName, dinner, lunch, breakfast);
