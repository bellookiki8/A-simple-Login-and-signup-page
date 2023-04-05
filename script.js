// Validate Sign Up form
function validateSignup() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (fullname.trim() == "") {
        alert("Please enter your full name.");
        return false;
    }

    if (email.trim() == "") {
        alert("Please enter your email address.");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (username.trim() == "") {
        alert("Please enter a username.");
        return false;
    }

    if (password.trim() == "") {
        alert("Please enter a password.");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    if (confirmpassword.trim() == "") {
        alert("Please confirm your password.");
        return false;
    } else if (password != confirmpassword) {
        alert("Passwords do not match.");
        return false;
    }

    alert("Sign up successful!");
    return true;
}

// Validate Login form
function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username.trim() == "") {
        alert("Please enter a username.");
        return false;
    }

    if (password.trim() == "") {
        alert("Please enter a password.");
        return false;
    }

    alert("Login successful!");
    return true;
}
