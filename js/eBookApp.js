// This app is primarily for managing of eBooks data //
//The database is hosted on firebase
//In this js file, we write functions that will interact with the database

   
   	
   	var bookstack = new Firebase("https://bookstack.firebaseio.com");
   	

    var userID = localStorage.userid;
    


     var alerter = $(localStorage.userid).val();
     




   	var AddEbooks = function () {
   	
   		var title = document.getElementById('name').value;
   		var url = document.getElementById('url').value;
   		var describe = document.getElementById('description').value;
      addBook(title,url,describe);
   		
   	}
	
    


	

    

    
    var addBook = function(title,link,describe) {
    	
    	var link = link;
    	var describe = describe;
    	var usersinfo = bookstack.child('Books');
    	usersinfo.push({
    		title: title,
    		url: link,
    		description: describe, 
        userID: userID

    	});
      console.log(userID);
      console.log(title);
      console.log(link);
      console.log(describe);
    }

    
    


   bookstack.child('Users').child(userID).on("value", function(snapshot) {
      var user = snapshot.val();
      $('#username').html("Hello "+user.firstname+"!");
      console.log(user.firstname);

    }); 


   var listBooks = function(){
      var bookList = bookstack.child('Books');
      bookList.on("value", function(snapshot){
        var book = snapshot.val();
        if (book) {
          for(var i in book) {
            var s = document.getElementById("booklist");
            var newOption = document.createElement("option");
            console.log(book[i]);
            newOption.text = (book[i].title);
            s.add(newOption);
          }
        } else {
          alert("You don't have any books yet.")
        }
          
      });

    }

    listBooks();

    var deleteBooks = function() {
      var selectedBook = document.getElementById('booklist').value
      var users = bookstack.child("Books");
      users.on('value', function(snapshot){
        listed = snapshot.val();
        for (var key in listed) {
            if(key === userID) {
              var update = bookstack.child(UserID);
              update.remove();
            }
        }
      
      
    });
  }


   var checkoutBook = function() {
      var selected = document.getElementById('booklist').value
      var  select = bookstack.child('Books');
      select.on("value", function(snapshot) {
        var book = snapshot.val();
        if (book !== null) {
          for(var key in book){
            document.getElementById('result').innerHTML = " Title: "+(book[key].title) +", "+ " Description: " + (book[key].description); + " " + (book[key].url);
    
        }
          
        } else {
          alert("You dont have any books yet.")
        }
      });
    } 


   










   



    
    


	
   
   








   

	




	
	
	
	

	 
	
		

















