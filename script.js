// Handle Login
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === "test@example.com" && password === "password") {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid credentials!");
    }
});

// Handle Registration
document.getElementById('register-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Registration successful! You can now login.");
    window.location.href = "login.html";
});
