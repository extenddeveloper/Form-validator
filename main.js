/*----------  Make a form validator using given functionality.  ----------*/


/*----------  

name => must be more then 5 character.
USeranme => must be 5 character with alphanumeric and underscores, without spaces.
Email => valid Email
Phone => validate bangladeshi phone number.
Slug => (-,_,letter, Number)
Generate Password => Generate random Strong  password.
Copy => Copy generated password.
Website url => Validate Website URl.

submit button => validate all fields and submit the form.


----------*/


let formEl = document.querySelector('form');
let fullName = document.getElementById('name');
let userName = document.getElementById('username');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let slug = document.getElementById('slug');
let password = document.getElementById('password');
let errorEl = document.querySelector('.error');
let generatePass = document.getElementById('generate-password');
let copyPass = document.getElementById('copy-password');
let webUrl = document.getElementById('url');
let submitBtn = document.getElementById('submit');

formEl.addEventListener('submit', function(e){
    e.preventDefault();
    getFullName();
    getUserName();
    validEmail();
    validPhone();
    validSlug();
    validPassword();
    validWebsite();
})

function getFullName(){
    let fullNameValue = fullName.value;
    let nameRegex = /[\w\s\.]/gi;

    if (nameRegex.test(fullNameValue)) {
        fullName.style.border = "#0069d9 solid 2px";
        return true;
    }
    else {
        fullName.style.border = "red solid 2px";
        return false;
    }
}
function getUserName(){
    let UserNameValue = userName.value;
    let userNameRegex = /(_)?[\wa-zA-Z0-9]+|\w{2,}@\w{2,}\.\w{2, 10}/gi;

    if (userNameRegex.test(UserNameValue)) {
        userName.style.border = "#0069d9 solid 2px";
        return true;
    }
    else {
        userName.style.border = "red solid 2px";
        return false;
    }
}

function validEmail(){
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegex.test(email.value)) {
        email.style.border = '#0069d9 solid 2px';
        return true;
    }
    else {
        email.style.border = "red solid 2px";
        return false;
    }
}

function validPhone(){
    let phoneRegex = /\+?(88)?01(3|[5-9])\d{8}/gi;
    if (phoneRegex.test(phone.value)) {
        phone.style.border = '#0069d9 solid 2px';
        return true;
    }
    else {
        phone.style.border = "red solid 2px";
        return false;
    }
}

function validSlug(){
    let slugRegex = /[\w\-a-z0-9]/gi;
    if (slugRegex.test(slug.value)) {
        slug.style.border = '#0069d9 solid 2px';
        return true;
    }
    else {
        slug.style.border = "red solid 2px";
        return false;
    }
}

function validPassword(){
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*()_+~`|}{[\]\:;?><,\.\/\-\=])[a-zA-Z0-9!@#$%^&*()_+~`|}{[\]\:;?><,./-=]{8,20}$/gi;
    if (passwordRegex.test(password.value)) {
        password.style.border = '#0069d9 solid 2px';
        return true;
    }
    else {
        password.style.border = "red solid 2px";
        return false;
    }
    
}





generatePass.addEventListener('click', function(){
    function password_generator( len ) {
        var length = (len)?(len):(10);
        var string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
        var numeric = '0123456789';
        var punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        var password = "";
        var character = "";
        var crunch = true;
        while( password.length<length ) {
            entity1 = Math.ceil(string.length * Math.random()*Math.random());
            entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
            entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
            hold = string.charAt( entity1 );
            hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
            character += hold;
            character += numeric.charAt( entity2 );
            character += punctuation.charAt( entity3 );
            password = character;
        }
        password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
        return password.substr(0,len);
    }
    const generatedPassword = password_generator(12);
    password.value = generatedPassword;
    
})


copyPass.addEventListener('click', function(){
    navigator.clipboard.writeText(password.value);
    alert("Copied The Password: " + password.value);
})


function validWebsite(){
    let webUrlRegex = /[http(s)?:\/\/|http:\/\/]?(www\.)?\w\.\w{2,}/gi;
    if (webUrlRegex.test(webUrl.value)) {
        webUrl.style.border = '#0069d9 solid 2px';
        return true;
    }
    else {
        webUrl.style.border = "red solid 2px";
        return false;
    }
}
