function checkForm(form)
{
  var errors=[];

  var re = /^[a-zA-Z]+$/;
  
  if (firstname.value === "") {
    errors.push("Error: First name is required");
   
  }
  else if(!re.test(form.firstname.value)) {
    errors.push("Error: First name contains invalid characters");
  
  }
  else if(form.firstname.value > 20) {
    errors.push("Error: Must be less than 20 characters.");
    
  }

  if(form.lastname.value =="") {
    errors.push("Error: Enter last name");
  
  }
  else if(!re.test(form.lastname.value)) {
    errors.push("Error: Contains invalid characters");
  
  }
  else if(form.lastname.value > 50) {
    errors.push("Error: Must be less than 50 characters.");

  }



  if(form.email.value =="") {
    errors.push("Error: Enter email");
   
  }

  if(form.phone.value =="") {
    errors.push("Error: Enter phone");
   
  }
  if(form.username.value =="") {
    errors.push("Error: Enter username");
   
  }

  else if(form.username.value > 12) {
    errors.push("Error: Must be less than 12 characters.");
  
  }
  if(form.password.value =="") {
    errors.push("Error: Enter password");
   
  }
  else if(form.password.value > 7) {
    errors.push("Error: Must be less than 7 characters.");
    
  }
  if(form.address.value =="") {
    errors.push("Error: Enter address");
    
  }
  if(form.city.value =="") {
    errors.push("Error: Enter city");
   
  }

  if(errors.length > 0 ) {
    var msg = "ERRORS:\n\n";
    for (var i=0; i<errors.length; i++) {
      msg += errors[i] + "\n";
    }
    alert(msg);
    return false;
  }
  return true;
}
