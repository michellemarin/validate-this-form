
/* function validateForm(form) {
  //Check formElement's data here, and return false on error...
  if ($('#exampleInputUsername2').val().length < 7) {
  console.log('omg username too short');
  return false;
  } else if ($('#exampleInputUsername2').val().length > 26) {
    console.log('username too long');
    return false;
  } else if ($('#exampleInputEmail').value.match(/[@]/))  {
  console.log('your email needs a @ symbol to work');
  return false;
  } else if ($('#exampleInputEmail').val().indexOf(".") != -1)  {
    console.log('your email needs a . to work');
    return false;
  } else if ($('#exampleInputPassword2').val().length < 9)  {
    console.log('your password needs to be at least 9 characters long');
    return false;
  } else if ($('#exampleInputPassword2').value.match(/[a-zA-Z]/))  {
    console.log('your password needs to have at least one character');
    return false;
  } else if ($('#exampleInputPassword2').value.match(/[0-9]/))  {
    console.log('your password needs to have at least one number');
    return false;
  }else {
      return true;
      console.log('thank you your form has bee submitted!')
  }
}*/

$.validator.addMethod('mypassword', function(value, element) {
        return this.optional(element) || (value.match(/[a-zA-Z]/) && value.match(/[0-9]/));
    },
    'Password must contain at least one numeric and one alphabetic character.');


$("#myForm").validate( {
  rules: {
    username: {
      required: true,
      rangelength: [7, 26]
    },
    email: {
      required: true,
      email: true
    },
    password: {
      required: true,
      minlength: 9,
      mypassword: true,
    }
  }

});
