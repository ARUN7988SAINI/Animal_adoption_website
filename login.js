// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const submitButton = form.querySelector("button[type='submit']");

    form.addEventListener("submit", (event) => {
        // Check if passwords match
        if (password.value !== confirmPassword.value) {
            alert("Passwords do not match!");
            event.preventDefault(); // Prevent form submission
        }
    });

    // Optional: Live feedback for password match
    confirmPassword.addEventListener("input", () => {
        if (password.value !== confirmPassword.value) {
            confirmPassword.style.borderColor = "red";
            submitButton.disabled = true; // Disable button if passwords do not match
        } else {
            confirmPassword.style.borderColor = "";
            submitButton.disabled = false; // Enable button if passwords match
        }
    });
});
