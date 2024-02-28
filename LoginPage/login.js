function generateOTP() {
    var otpLength = 6;
    var characters = '0123456789';
    var otp = '';
    for (var i = 0; i < otpLength; i++) {
        otp += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('otp').value = otp;
}

function generateCaptcha() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var captchaLength = 6;
    var captcha = '';
    for (var i = 0; i < captchaLength; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('captcha').textContent = captcha;
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var email = document.getElementById('email').value;
    var otp = document.getElementById('otp').value;
    var captchaInput = document.getElementById('captchaInput').value;
    var captcha = document.getElementById('captcha').textContent;

    if (captchaInput === captcha) {
        // Here you can add code to send the email and OTP to a backend for verification
        alert('Login successful!');
    } else {
        alert('CAPTCHA verification failed. Please try again.');
    }
});

// Generate initial CAPTCHA when the page loads
window.onload = generateCaptcha;