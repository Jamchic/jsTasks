function buttonClick() {
    let question = prompt(
        "Каково официальное название JavaScript?", ''
        )
    ;

    if (question === 'EcmaScript') {
        alert('Да вы знаток!');
    } else {
        alert('Не знаете ? ECMAScript');
    }
}
function buttonClick2() {
    let number = prompt(
        "Введите число", ''
        )
    ;

    if (number > 0) {
        alert(1);
    }
    else if (number < 0) {
        alert(-1);
    }
    else {
        alert(0);
    }
    console.log(number);
}
function buttonClick3() {
    let login = prompt(
        "Логин", ''
        )
    ;

    if ( login === 'Админ') {
        prompt ('Пароль', '');
    }
    else if ( login !== 'Админ'){
        alert('Я вас не знаю')
    }
    else if ( login == null ) {
        alert('Вход отменен')
    }
}