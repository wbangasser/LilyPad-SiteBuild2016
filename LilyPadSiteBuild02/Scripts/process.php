<?php
// process.php

$errors         = array();      // array to hold validation errors
$data           = array();      // array to pass back data

// validate the variables ======================================================
    // if any of these variables don't exist, add an error to our $errors array

    if (empty($_POST['fullName']))
        $errors['fullName'] = 'Your name is required.';

    if (empty($_POST['email']))
        $errors['email'] = 'Email is required.';

    if (empty($_POST['phone']))
        $errors['phone'] = 'Phone Number is required.';
    
    if (empty($_POST['message']))
        $errors['message'] = 'Your message is required.';

// return a response ===========================================================

    // if there are any errors in our errors array, return a success boolean of false
    if ( ! empty($errors)) {

        // if there are items in our errors array, return those errors
        $data['success'] = false;
        $data['errors']  = $errors;
    } else {

        // if there are no errors process our form, then return a message

        // DO ALL YOUR FORM PROCESSING HERE
        // THIS CAN BE WHATEVER YOU WANT TO DO (LOGIN, SAVE, UPDATE, WHATEVER)
		// Here we get all the information from the fields sent over by the form.
		$inputEmail = $_POST['inputEmail'];
		$inputHandle = $_POST['inputHandle'];
		$message = $_POST['inputText'];
		
		$to = 'wbangasser@live.com';
		$subject = 'New Message from '.$inputHandle;
		$message = 'FROM: '.$inputEmail.' Board Handle: '.$inputHandle.'Message: '.$inputText;
		$headers = 'From: wbangasser@live.com';
		 
		if (filter_var($inputEmail, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
		mail($to, $subject, $message, $headers); //This method sends the mail.
		echo "Your email was sent!"; // success message
		}else{
		echo "Invalid Email, please provide an correct email.";
		}
		

        // show a message of success and provide a true success variable
        $data['success'] = true;
        $data['message'] = 'Success!';
    }

    // return all our data to an AJAX call
    echo json_encode($data);
	
