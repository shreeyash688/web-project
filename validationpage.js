<script>
document.querySelector("form").addEventListener("submit", function(event) {

    event.preventDefault();   // Stops form submission

    let name = document.getElementById("sname").value;
    let mobile = document.getElementById("number").value;
    let email = document.getElementById("Email").value;
    let password = document.getElementById("pass").value;
    let confirmPassword = document.getElementById("cpass").value;

    // Name validation
    if(name === "") {
        alert("Name cannot be empty");
        return;
    }

    // Mobile validation (10 digits)
    if(mobile.length !== 10) {
        alert("Mobile number must be 10 digits");
        return;
    }

    // Email validation
    if(!email.includes("@") || !email.includes(".")) {
        alert("Enter valid email");
        return;
    }

    // Password length validation
    if(password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    // Confirm password validation
    if(password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    alert("Form submitted successfully ✅");
});
</script>