var bookstack = new Firebase("https://bookstack.firebaseio.com/")


$("#loginbutton").click(function() 
{
	var emailValue = $('#email').val();
var passwordValue = $('#password').val();

	bookstack.authWithPassword({
  email: emailValue,
  password: passwordValue
}, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
    $("#loginmessage").html("Login Failed! Looks like you're not yet registered.");
    $("#register").html("Register here");
  } else {
    console.log("Authenticated successfully with payload:", authData);
    $("#loginmessage").html("Yes! Welcome Back!");
    $("#continue").html("Continue to dashboard.");
    window.location.href = "eBookApp.html";
    localStorage.userid = authData.uid;
  }

});
});

  	