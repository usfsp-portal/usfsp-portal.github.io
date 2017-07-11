
var http_request = false;
function request(url, callback, postvars) {
	http_request = false;
	// Non-IE...
	if (window.XMLHttpRequest) { 
		http_request = new XMLHttpRequest();
		if (http_request.overrideMimeType) {
			http_request.overrideMimeType('text/xml');
		}
	}	 
	// IE...
	if (window.ActiveXObject) { 
		try {
			http_request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
		try {
			http_request = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {}
		}
	}
	if (!http_request) {
		alert('Cannot create XMLHTTP instance.');
		return false;
	}
	http_request.onreadystatechange = function () {
		request_return(callback);
	}	
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var randomstring = '';
	for (var i=0; i<16; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
	}
	url += "?cachebust="+randomstring;
	http_request.open('POST', url, true);
	http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http_request.send(postvars);
}
function request_return(callback) {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			// No need to callback unless a function has been defined...
			if (callback != null) {
            	window[callback](http_request.responseText);
			}
		} else {
			alert('There was a problem with the request: ' + http_request.status);
		}
	}
}