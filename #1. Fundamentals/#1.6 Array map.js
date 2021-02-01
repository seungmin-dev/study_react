const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

// const addSmile = day => `😊 ${day}`;
// const smilingDays = days.map(addSmile);

const indexingDays = days.map((day, index) => `${index}-${day}`); //map은 기본적으로 index를 제공함
console.log(indexingDays);