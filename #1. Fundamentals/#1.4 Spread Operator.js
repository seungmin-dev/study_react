const days = ["Mon", "Tue", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];

// const allDays = [days + otherDays];
// console.log(allDays);
// ->["Mon,Tue,WedThu,Fri,Sat"]

const allDays = [...days, ...otherDays, "Sun"];
console.log(allDays);
// ->["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
// Object에서도 사용가능