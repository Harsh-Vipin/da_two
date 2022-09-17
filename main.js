const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const zip = document.getElementById('zip');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /@vitstudent.ac.in$/;
    return re.test(String(email).toLowerCase());
}
const isValidZip = zip => {
    const zip_code = /^[0-9]{5}$/;
    return zip_code.test(String(zip));
}
const isValidPhone = phone => {
    const phonere = /^\d{10}$/;
    return phonere.test(String(phone));
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const zipValue = zip.value.trim();
    const phoneValue = phone.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if(zipValue === '') {
        setError(zip, 'zip code is required');
    } else if (!isValidZip(zipValue)) {
        setError(zip, 'Provide a valid zipcode');
    } else {
        setSuccess(zip);
    }
    if(phoneValue === '') {
        setError(phone, 'phone is required');
    } else if (!isValidPhone(phoneValue)) {
        setError(phone, 'Provide a valid phone number');
    } else {
        setSuccess(phone);
    }
    
    var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,100}$/

    if (!pattern.test(passwordValue)) {
        setError(password, "Password doesn't satisfy the requirements");
        // alert("Password doesn't satisfy the requirements")
    // } else if(passwordValue === '') {
    //     setError(password, 'Password is required');
    // } else if (passwordValue.length < 10 ) {
    //     setError(password, 'Password must be at least 10 characters and not more than 100.')
    } else {
        setSuccess(password);
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};
