let checkbox = document.querySelector('#checkbox');
let password = document.querySelector('#password');

checkbox.addEventListener('input', () => {
    if(password.type === 'password') {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
})
