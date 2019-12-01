  var txt = "";
	txt += "<p>Url: " + window.location.href + "</p>"
	txt += "<p> Ip Address: " + userip;
	txt += "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
	txt += "<p>Browser Name: " + navigator.appName + "</p>";
	txt += "<p>Browser Version: " + navigator.appVersion + "</p>";
	txt += "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
	txt += "<p>Browser Language: " + navigator.language + "</p>";
	txt += "<p>Browser Online: " + navigator.onLine + "</p>";
	txt += "<p>Platform: " + navigator.platform + "</p>";
	txt += "<p>User-agent header: " + navigator.userAgent + "</p>";
	
    Email.send({
    SecureToken : "d768c56e-85e5-4366-a24e-43cc4e84ded8",
    To : 'ssarwarjahan@gmail.com',
    From : "visitor@sab1t.me",
    Subject : "Visitor Found on sab1t.me",
    Body : txt
});
