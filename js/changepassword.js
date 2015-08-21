var bookstack = new Firebase("https://bookstack.firebaseio.com/")
$("#changepasswordbutton").click(function() 
{
	var emailValue = $('#email').val();
var passwordValue = $('#password').val();
var newpasswordValue = $('#newpassword').val();
bookstack.changePassword({
  email: emailValue,
  oldPassword: passwordValue,
  newPassword: newpasswordValue
}, function(error) {
  if (error) {
    switch (error.code) {
      case "INVALID_PASSWORD":
        console.log("The specified user account password is incorrect.");
        $("#loginmessage").html("Err, looks like your old password is incorrect.");
        break;
      case "INVALID_USER":
        console.log("The specified user account does not exist.");
        $("#loginmessage").html("Sorry. You're not a user. You can't change passwords.");
        break;
      default:
        console.log("Error changing password:", error);
        $("#loginmessage").html("Oops! Error changing password. Please try again.");
    }
  } else {
    console.log("User password changed successfully!");
    $("#loginmessage").html("Yipee! You have a brand new password!");
  }
});
});
