function validation()
 {

 	//**************************** For Name*************************************************************
 	var name = document.getElementById('name1').value;
 	var characters = /^[A-Za-z]+$/;

 // 	if(name.length<3)
 // 	 {
 // 	 	document.getElementById("name2").innerHTML="Name cannot Be less than 3 characters";
 // 	 	return false;
 // 	 }
	 
	// else

	//  if(name.length>10)
 // 	 {
 // 	 	document.getElementById("name2").innerHTML="Name cannot Be more than 10 characters";
 // 	 	return false;
 // 	 }

 // 	 else
 	 	if (!(name.match(characters))) 
 	 	  {
 	 	  	document.getElementById("name2").innerHTML="Name cannot Be Numbers or special characters";
 	 	    return false;
 	 	  }

 	 	 else
 	 	 {
 	 	 	document.getElementById("name2").innerHTML="success";
 	 	 }

 	//*********************** End of For Name*********************************************************


// ************************** Phone Number **************************************************************

var num = document.getElementById("number1").value;
var numreg = /^[0-9]+$/;

if (!(num.match(numreg))) 
 	 	  {
 	 	  	document.getElementById("number2").innerHTML="number cannot Be characters or special characters";
 	 	    return false;
 	 	  }

 else
 	if (num.length<10)
 	 {
 	 	document.getElementById("number2").innerHTML="Number cannot be less than 10";
 	 	    return false;
 	 }

else
 	if (num.length>10)
 	 {
 	 	document.getElementById("number2").innerHTML="Number cannot be greater than 10";
 	 	    return false;
 	 }

 	  else
 	 	 {
 	 	 	document.getElementById("number2").innerHTML="Valid";
 	 	 }

// ************************** End ofPhone Number **************************************************************



// *********************************** Password **************************************************************

var pass1 = document.getElementById("password1").value;
var passconstraint = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,16}$/;

if (!(pass1.match(passconstraint))) 
 	 	  {
 	 	  	document.getElementById("password2").innerHTML="Password should contain atleast 1 number and 1 special character";
 	 	    return false;
 	 	  }

 else
 	  {
 	  	document.getElementById("password2").innerHTML="Strong Password";
 	  }



var confi1 = document.getElementById("confirm1").value;

if(!(pass1.match(confi1)))
 {
 	document.getElementById("confirm2").innerHTML="Password do no match....TRY AGAIN!!"
 	return false;
 }

 else
 {
 	  	document.getElementById("confirm2").innerHTML="Strong Password";
 }


alert("Successfully Registered")


 	
 }