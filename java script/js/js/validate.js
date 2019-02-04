function validate(){

var name = document.getElementById("name").value;
var email =document.getElementById("email").value;
var message =document.getElementById("message").value;
var validEmail = /^([A-Za-z0-9_\-\,])+
@([A-Za-z0-9_\-\,])+\.([A-Za-z]{2,4})$/;
//alert(name);
//alert(email);
//alert(message);
if(name == ""){
	alert("Please enter your name");
	return false;
}
else if(email ==""){
    alert("Please enter your email");
	return false;
}
else if(validEmail.text(email)== false){
    alert("Please enter valid email address");
}
else if(message ==""){
    alert("Please enter your message");
	return false;
}	
else{

return true;
}
}