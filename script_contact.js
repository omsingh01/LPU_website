// Initialize EmailJS with your user ID
emailjs.init("user_your_emailjs_user_id");

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Prepare the email template parameters
    var templateParams = {
        to_email: "anweerathour9@gmail.com",
        from_email: email,
        message: message
    };

    // Send the email using EmailJS service
    emailjs.send("default_service", "template_your_email_template_id", templateParams)
        .then(function(response) {
            console.log("Email sent successfully", response);
            // Reset the form or show a confirmation message to the user
        }, function(error) {
            console.error("Email failed to send", error);
            // Handle errors, show error message to the user, etc.
        });
});
