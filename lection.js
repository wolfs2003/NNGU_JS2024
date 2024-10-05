const userName = 'Nikita';
const lastName = 'Isaev';
function getUserName(userName2, lastName2) {
    return userName2 + " " + lastName2;
}
console.log(getUserName(userName, lastName));

let firstName = '';
function hello(username){
    if(username !=undefined){
        return 'Привет, ' + username;
    }
    else {
        return 'Привет, гость!'
    }
}
console.log(hello('Vasya'));

function pow(num, pow=1){
    return Math.pow(num, pow);
}
console.log(pow(-33,2));

function stroka(stroka, n=1){
    for(let i = 1; i <= n; i++){
        console.log(stroka);
    }
    return;
}
stroka('fgrgrg', 5);

let strokaNtimes = (stroka, N=1) => {for(i = 0;i<N;i++){console.log(stroka)}};
strokaNtimes("Строка",3);

let username = "Nfhrjsgh";

function tolower(params){
    return params[0].toUpperCase() + params.slice(1);
}
console.log(tolower('rgergerg'));