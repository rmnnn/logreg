var usernameInput = document.getElementById('input-username');
var passwordInput = document.getElementById('input-password');

var loginBtn = document.getElementById('login-btn');



var username = 'test123';
var password = 'pwd'


function login(){
   if(username != usernameInput.value || password != passwordInput.value){
       usernameInput.style.border = '2px solid red';
       passwordInput.style.border = '2px solid red';
   }
   else{
       alert('CORRECT')
   }

}