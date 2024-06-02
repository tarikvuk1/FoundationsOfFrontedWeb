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

    $(document).ready(function() {
        $('.toggle-button').on('click', function() {
            $(this).next('.content-section').slideToggle();
            $(this).toggleClass('expanded');
        });
    });

    $(document).ready(function () {
        $("#birthdate").datepicker({
            dateFormat: "yy-mm-dd",
            changeMonth: true,
            changeYear: true,
            yearRange: "-100:+0"
        });

        $("#contactForm").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                birthdate: {
                    required: true,
                    date: true
                },
                password: {
                    required: true,
                    minlength: 8
                },
                confirm_password: {
                    required: true,
                    equalTo: "#password"
                }
            },
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: "Your name must consist of at least 2 characters"
                },
                email: {
                    required: "Please enter your email address",
                    email: "Please enter a valid email address"
                },
                birthdate: {
                    required: "Please enter your birth date",
                    date: "Please enter a valid date"
                },
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 8 characters long"
                },
                confirm_password: {
                    required: "Please confirm your password",
                    equalTo: "Passwords do not match"
                }
            },
            submitHandler: function (form) {
                toastr.success('Form submitted successfully!', 'Success');
                form.submit();
            }
        });

        $('#password').on('keyup', function () {
            var password = $(this).val();
            var strength = 'Weak';
            var color = 'red';

            if (password.length >= 8) {
                var regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})");
                if (regex.test(password)) {
                    strength = 'Strong';
                    color = 'green';
                } else if (password.length >= 6) {
                    strength = 'Medium';
                    color = 'orange';
                }
            }

            $('#password-strength').text('Strength: ' + strength).css('color', color);
        });
    });