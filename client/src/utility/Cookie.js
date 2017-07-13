export function setTokenInCookie(token) {
	console.log('cookie WAS: ' + document.cookie);
	let date = new Date();
    date.setTime(date.getTime()+(180000)); // 3 min expiration
    document.cookie = 'token=' + token + '; expires=' + date.toGMTString();
    console.log('cookie is NOW: ' + document.cookie);
};