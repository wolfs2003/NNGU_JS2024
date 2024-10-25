function days(day){
    let week = ["понедельник", "вторник", "среда", "четверг", "пятница","суббота", "воскресенье"];
    return week[day-1];
}
console.log(days(6));