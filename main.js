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