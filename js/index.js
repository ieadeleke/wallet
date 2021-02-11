
window.addEventListener('scroll', () => {
    let nav = document.querySelector('.nav');
    if (window.pageYOffset > 100) {
        nav.classList.add('fixed')
    } else {
        nav.classList.remove('fixed');
    }
})



document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    window.location.href = "profile.html";
})
