const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var commentError = document.getElementById('commentError');
    var isValid = true;

    nameError.innerText = '';
    emailError.innerText = '';
    commentError.innerText = '';

    if (name == '') {
        nameError.innerText = 'Please enter your name.';
        isValid = false;
    }

    if (email == '' || !validateEmail(email)) {
        emailError.innerText = 'Please enter a valid email address.';
        isValid = false;
    }

    if (comment == '') {
        commentError.innerText = 'Please enter a comment.';
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
