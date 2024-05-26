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

$(document).ready(function() {
    // Theme switcher
    $('#theme').on('change', function() {
        var theme = $(this).val();
        switch(theme) {
            case 'dark':
                $('body').css({
                    'background-color': 'black',
                    'color': 'white'
                });
                break;
            case 'light':
                $('body').css({
                    'background-color': 'white',
                    'color': 'black'
                });
                break;
        }
    });
    });