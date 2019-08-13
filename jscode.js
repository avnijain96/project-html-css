function SubmitSignUp(){
    const register=document.getElementById("modalRegisterForm");
    const inputName= document.getElementById("userName");
    localStorage.setItem("Username", inputName.value);
    const inputEmail= document.getElementById("emailId");
    localStorage.setItem("email", inputEmail.value);
    const inputPassword= document.getElementById("password");
    localStorage.setItem("Password", inputPassword.value);
    alert("U r successfully registered.")
   }


function submitLogin(){
    var storedName = localStorage.getItem('Username');
    var storedPw = localStorage.getItem('Password');
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('password');
    if(userName.value !== storedName && userPw.value !== storedPw) {
        alert('Invalid UserName and password.');
    }else {
        alert('You are successfully logged in.');
    }
}

(function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  var notShown=false;
  function togNav() {
  	console.log('i m clicked',notShown);
    const nav = document.getElementById("mySidenav");
    const main=document.getElementById("main");
    if (notShown) {
      nav.style.display="block";
      notShown=!notShown;
      nav.style.top = "50px";
      main.style.marginLeft="170px";
      nav.style.overflow= "visible";
  
    } else {
      nav.style.display = "none";
      notShown=!notShown;
      main.style.marginLeft="0";
    }
  }
