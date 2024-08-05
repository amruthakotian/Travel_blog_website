function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    if (name === "" || email === "" || subject === "" || message === "") {
        document.getElementById("result").innerHTML = "Please fill in all fields.";
    } else {
        // Additional validation logic can be added here
        // For example, email format validation
        // If all validation passes, you can submit the form or take further actions
        document.getElementById("result").innerHTML = "Form submitted successfully!";
    }
}
