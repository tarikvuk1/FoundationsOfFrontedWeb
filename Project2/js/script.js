document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const target = document.getElementById(button.getAttribute('data-target'));
            if (target.style.display === 'none' || target.style.display === '') {
                target.style.display = 'block';
            } else {
                target.style.display = 'none';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const lightThemeBtn = document.getElementById('light-theme-btn');
    const darkThemeBtn = document.getElementById('dark-theme-btn');
    });
    
    lightThemeBtn.addEventListener('click', function () {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    });

    darkThemeBtn.addEventListener('click', function () {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    });