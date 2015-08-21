var bookstack = new Firebase("https://bookstack.firebaseio.com/")
$("#registerbutton").click(function() 
{
  var users = "Users";
  var firstname = $('#firstname').val();
  var lastname = $('#lastname').val();
	var emailValue = $('#email').val();
var passwordValue = $('#password').val();

	bookstack.createUser({
  email: emailValue,
  password: passwordValue
}, function(error, userData) {
  if (error) {
    switch (error.code) {
      case "EMAIL_TAKEN":
        console.log("The new user account cannot be created because the email is already in use.");
        $("#loginmessage").html("The new user account cannot be created because the email is already in use.");
        $("#continue").html("");
        break;
      case "INVALID_EMAIL":
        console.log("The specified email is not a valid email.");
        $("#loginmessage").html("The specified email is not a valid email.");
        $("#continue").html("");
        break;
      default:
        console.log("Error creating user:", error);
        $("#loginmessage").html("Error creating user:" + error);
        $("#continue").html("");
    }
  } else {
    console.log("Successfully created user account with uid:", userData.uid);
    $("#loginmessage").html("Successfully created user account!");
    $("#continue").html("Come on in!");
    window.location.href = "eBookApp.html";
    bookstack.child(users).child(userData.uid).set({
      firstname: firstname,
      lastname: lastname,
      email: emailValue,
      password: passwordValue
    })
  }
});
})
$("#continue").html("");
