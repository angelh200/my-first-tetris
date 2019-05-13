function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() +
    days * 24 * 60 * 60 * 1000);

    let newCookie = `${name}=${value}; expires=${date.toUTCString()}; path=/;`;
    console.log(`La cookie ${name} ha sido creada.`);
    document.cookie = newCookie;
}

function getCookie(name) {
    let x = document.cookie.split('; ');
    let value;

    x.forEach(pair => {
        let arrayPair = pair.split('=');
        console.log(arrayPair);
        if (arrayPair[0] === name) {
            value = arrayPair[1];
        }
    });
    return value || 0;
}

function deleteCookie(name) {
    var date = new Date();
    date.setTime(date.getTime() - 2 * 24 * 60 * 60 * 1000);
    console.log(date);
    
    document.cookie = `${name}=; expires=${date.toUTCString()}; path=/;`;
    console.log(`El cookie ${name} ha sido eliminado.`);
}