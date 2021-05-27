// Retriving  html element from dom
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input,message) {
    const formControl=  input.parentElement; 
    formControl.className = 'form-control error';


}




//Event Listners
// create event listner for submit button
form.addEventListener('submit',function(e){
    //stop page from reloading
        e.preventDefault();
     // if user name is empty
     if (username.value === ''){
           showError(username,'Username is required');
     }   

}); 