In index.html
changed <!-- <a href="./login.html"><button>Login</button></a> -->
to <a href="http://127.0.0.1:8080/login"><button>Login</button></a>
added 	<script src="main.js"></script>
	<script src="server.js"></script>  to head
------------------------------------------------------------------------------
In login.html
added 	<script src="main.js"></script>
	<script src="server.js"></script>
    to head

 changed // var usernameValue = form["username"];
 and 		// var passwordValue = form["password"];
to 		var username = form["username"];
and 		var password = form["password"];

changed 			// if(!RegExp("([A-G])\w+").test(usernameValue)) {
		// 	usernameValue = "";
		// }

to	if(!RegExp("([A-Z])\w+").test(username.value)) {
			username.value = "";
		}

changed // if(!RegExp("([a-g])\w+").test(passwordValue)) {
		// 	passwordValue = "";
		// }

 to  if(!RegExp("([a-z])\w+").test(password.value)) {
			password.value = "";
		}

changed 	// var request = "./authenticate?username=" + username.value + "&password=" + password.value;

to   var request = "/login?username=" + username.value + "&password=" + password.value;

---------------------------------------------------------------------------
In server.js

changed 	// if (parUrl.pathname === "/authenticate") {
to          if (parUrl.pathname === "./login") {

   

    changed 	//var username = parUrl.query.username;
	and		//var password = parUrl.query.password;

     to 	 var username = parUrl.username;
		and  var password = parUrl.password;
		
