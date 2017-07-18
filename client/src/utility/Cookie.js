export function setTokenInCookie(token) {
	console.log('setTokenInCookie');
	console.log('cookie WAS: ' + document.cookie);
	let date = new Date();
    date.setTime(date.getTime()+(300000)); // 3 min expiration
    document.cookie = 'token=' + token + '; expires=' + date.toGMTString();
    console.log('cookie is NOW: ' + document.cookie);
};

export function getTokenFromCookie(name) {
	console.log('getTokenFromCookie');
	console.log('cookie is: ' + document.cookie);
	var value = "; " + document.cookie;
	var parts = value.split("; " + name + "=");
	if (parts.length === 2)
		return parts.pop().split(";").shift();
};

export function destroyCookie(name) {
	document.cookie = name + '=; Max-Age=0';
};