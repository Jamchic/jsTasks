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
}
function buttonClick3() {
    let login = prompt(
        "Логин", ''
        )
    ;
    let password = prompt(
        "Пароль", ''
        )
    ;

    if ( login === 'Админ') {
        prompt ('Пароль', '');
        if (password  === 'Черный Властелин') {
            alert('Доброе пожаловать') ;
        }
        else if ( password == null ) {
            alert('Вход отменен');
        }
        else {
            alert('Пароль неверен');
        }
    }
    else if ( login == null ) {
        alert('Вход отменен');
    }
    else {
        alert('Я вас не знаю');
    }
}