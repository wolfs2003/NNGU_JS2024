let me = {
    name: "Сергей",
    age: 45,
    positionAtWork: "Начальник отдела",
    living: "Нижний Новгород",
    education: "Высшее",
    travel: ""
};

function life(age){
    if(age == 21){
        me.age = age;
        me.living = "Якутск";
        me.education = "Профессиональное";
        me.positionAtWork = "Инженер";
    }
    if(age > 21 && age <= 35){
        me.age = age;
        me.living = "Калуга";
        me.education = "Профессиональное";
        me.positionAtWork = "Инженер";
    }
    if(age > 35 && age < 40){
        me.age = age;
        me.living = "Нижний Новгород";
        me.education = "Профессиональное";
        me.positionAtWork = "Инженер";
    }    
    if(age >= 40 && age < 43){
        me.age = age;
        me.living = "Нижний Новгород";
        me.education = "Высшее";
        me.positionAtWork = "Ведущий инженер";
    }
    else {
        me.age = age;
    }
    if(age >= 43 && age < 44){
        me.age = age;
        me.living = "Нижний Новгород";
        me.education = "Высшее";
        me.positionAtWork = "Начальник участка";
    }
    else {
        me.age = age;
    }
    if(age >= 44){
        me.age = age;
        me.living = "Нижний Новгород";
        me.education = "Высшее";
        me.positionAtWork = "Начальник отдела";
    }
    if(age == 45){
        me.age = age;
        me.living = "Нижний Новгород";
        me.education = "Высшее";
        me.positionAtWork = "Начальник отдела";
        me.travel = "Якутск";
    }
    return me;
}

console.log(life(43));
