document.getElementById('submit').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email == 'abc@gmail.com' && password == '1234') {
        window.location.href = "banking.html";
    }
})