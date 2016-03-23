//LilyPad Contact Form Processing
$(document).ready(function () {

    // process the form
    $('contactForm').submit(function (event) {

        $('.form-group').removeClass('has-error'); // remove the error class
        $('.help-block').remove(); // remove the error text

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'fullName': $('input[name=fullName]').val(),
            'email': $('input[name=email]').val(),
            'inputText': $('input[name=inputText]').val()
        };

        // process the form
        $.ajax({
            type: 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url: 'process.php', // the url where we want to POST
            data: formData, // our data object
            dataType: 'json', // what type of data do we expect back from the server
            encode: true
        })
            // using the done promise callback
            .done(function (data) {

                // log data to the console so we can see
                console.log(data);

                // here we will handle errors and validation messages
                if (!data.success) {

                    // handle errors for inputEmail ---------------
                    if (data.errors.inputEmail) {
                        $('#inputEmail').addClass('has-error'); // add the error class to show red input
                        $('#inputEmail').append('<div class="help-block">' + data.errors.inputEmail + '</div>'); // add the actual error message under our input
                    }

                    // handle errors for inputHandle ---------------
                    if (data.errors.inputHandle) {
                        $('#inputHandle').addClass('has-error'); // add the error class to show red input
                        $('#inputHandle').append('<div class="help-block">' + data.errors.inputHandle + '</div>'); // add the actual error message under our input
                    }

                    // handle errors for inputText alias ---------------
                    if (data.errors.inputText) {
                        $('#inputText').addClass('has-error'); // add the error class to show red input
                        $('#inputText').append('<div class="help-block">' + data.errors.inputText + '</div>'); // add the actual error message under our input
                    }

                } else {

                    // ALL GOOD! just show the success message!
                    $('form').append('<div class="alert alert-success">' + data.message + '</div>');

                    // usually after form submission, you'll want to redirect
                    // window.location = '/thank-you'; // redirect a user to another page
                    alert('success'); // for now we'll just alert the user

                }
            })

            .fail(function (data) {

                // show any errors
                // best to remove for production
                console.log(data);
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});