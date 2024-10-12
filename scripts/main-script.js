window.onload = function () {
    if (window.innerHeight <= 500) {
        document.querySelector(".songs-items").style.height = `${window.innerHeight - 10}px`;
    } else {
        document.querySelector(".songs-items").style.height = `${window.innerHeight - 30}px`;
    }
}

function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + "; " + expires + "; path=/";
}

function getCookie(name) {
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';');
    name = name + "=";
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}