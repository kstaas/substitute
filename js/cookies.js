// Portions taken from https://www.youtube.com/watch?v=-HgdzYCi2nI
let show_cookie_popup = true;
let user_cookie_consent = getCookie('user_cookie_consent', 'no');
// console.log(`user_cookie_consent ${user_cookie_consent}`);
if (user_cookie_consent == 'yes') {
    show_cookie_popup = false;
}

window.onload = (event) => {
    // console.log(`window.onload() user_cookie_consent ${user_cookie_consent} show_cookie_popup ${show_cookie_popup}`);
    if (show_cookie_popup) {
        const consent = confirm('This site uses cookies to remember\nyour query string and/or form values\nso that can be restored each time you visit.\n\nNo information is shared with anyone.\n\nAgree to the terms and conditions of the site?');
        // console.log(`window.onload() consent is ${consent}`);
        if (consent) {
            show_cookie_popup = false;
            user_cookie_consent = "yes";
            setCookie('user_cookie_consent', user_cookie_consent);
        }
    }
}

function setCookie(cname, cvalue) {
    if (user_cookie_consent == 'yes') {
        // console.log(`setCookie ( ${cname}, ${cvalue} ) user_cookie_consent ${user_cookie_consent}`);
        var exdays = 365;
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    } else {
        // console.log(`setCookie ( ${cname}, ${cvalue} ) user_cookie_consent ${user_cookie_consent} - NOT SET`);
    }
}

function getCookie(cname, default_value) {
    var cvalue = default_value;
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            cvalue = c.substring(name.length, c.length);
            break;
        }
    }
    // console.log('getCookie("' + cname + '", "' + default_value + '") = ' + cvalue);
    return cvalue;
}
