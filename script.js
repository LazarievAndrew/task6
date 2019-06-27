age = prompt ('Сколько Вам лет?')

while (isNaN(+age) || age < 1 || age > 150) {
    age = prompt ('Введите Ваш возрас корректно (он должен состоять из цифр, количество лет от 1 до 150)');
}

if ( age % 10 > 4 || age == 0 || age % 100 > 4 && age % 100 < 21 ){
    alert ('Вам ' + age + ' лет');
} else if ( age % 10 == 1 ) {
    alert ('Вам ' + age + ' год');
} else {
    alert ('Вам ' + age + ' года');
}