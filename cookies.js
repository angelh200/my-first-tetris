function setCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() +
    days * 24 * 60 * 60 * 1000);
}