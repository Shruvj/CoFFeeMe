var email=document.getElementById("email");
var pass=document.getElementById("password");
var submit=document.getElementById("submitbutton");

submit.addEventListener("click",validate);

function validate(){
 var emailvalue=email.value;
 var passvalue=pass.value;
 var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if (emailvalue == "" && passvalue == "") {
    window.alert("Website aint gonna login on its own!");
  email.style.borderColor = "red";
  pass.style.borderColor = "red";
  }
  if (emailvalue == "" && !passvalue == "") {
    window.alert("Enter a email address");
     email.style.borderColor = "red";
    pass.style.borderColor = "whitesmoke";
  } else {
    if (!emailvalue=="" && reg.test(emailvalue) == false) {
      window.alert("Email address format is incorrect");
      email.style.borderColor = "red";
      pass.style.borderColor = "whitesmoke";
  }
  }
  if (passvalue == "" && !emailvalue == "") {
    window.alert("Enter a password to proceed");
    pass.style.borderColor = "red";
    email.style.borderColor = "whitesmoke";
  }
  else if(!emailvalue=="" && !reg.test(emailvalue) == false && !passvalue == "")
   {
   pass.style.borderColor = "whitesmoke";
     email.style.borderColor = "whitesmoke";
     window.location.href="/CoffeeMe/main.html";
    }
}

var signup= document.getElementsByClassName("inputtext");
var join=document.getElementById("joinnow");

join.addEventListener("click",validateInput);
function validateInput()
{
  var datalength=signup.length;
    var i;
  for (i=0;i<datalength;i++)
    {
      if(signup[i].value==0)
        {
      signup[i].style.borderColor = "red";
        }
      else
        {
          signup[i].style.borderColor = "whitesmoke";
        }
    }
}


