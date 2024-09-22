document.querySelector('.burger').addEventListener('click', function() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');
    document.documentElement.classList.toggle('no-scroll');
});
