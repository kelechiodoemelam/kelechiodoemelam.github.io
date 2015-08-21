var bookstack = new Firebase("https://bookstack.firebaseio.com/")

$("#resetpasswordbutton").click(function() 
{
  var emailValue = $('#email').val();

bookstack.resetPassword({
  email: emailValue
}, function(error) {
  if (error) {
    switch (error.code) {
      case "INVALID_USER":
        console.log("The specified user account does not exist.");
        $("#loginmessage").html("Reset Failed! We cannot recognize your email. Are you sure you're registered?");
        break;
      default:
        console.log("Error resetting password:", error);
        $("#loginmessage").html("Uh Oh. Password Reset encountered an error. Please try again.");
    }
  } else {
    console.log("Password reset email sent successfully!");
    $("#loginmessage").html("Password reset email sent successfully!");
    $("#tokenmsg").html("We've sent you an email with a temporary token password. Please copy that token password and login here. But remember the token password is only valid for 24 hours! Please change your password after logging in, using the reset password button on your dashboard.");
  }
}); 
});
    $("#continue").html("");

$("#loginbutton").click(function() 
{
  var emailValue = $('#email1').val();
var passwordValue = $('#password1').val();

  bookstack.authWithPassword({
  email: emailValue,
  password: passwordValue
},
function(error, authData) {
  
  if (error) {
    console.log("Login Failed!", error);
    $("#loginmessage1").html("Login Failed! Looks like you're not yet registered.")
  } else {
    console.log("Authenticated successfully with payload:", authData);
    $("#loginmessage1").html("Yes! Welcome Back!");
    $("#continue1").html("Continue to dashboard.");
  }
});
});
    $("#continue").html("")

