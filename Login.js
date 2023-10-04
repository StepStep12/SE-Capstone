document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // Anda bisa menambahkan logika autentikasi di sini.
        // Contoh sederhana:
        if (username === 'user' && password === 'password') {
            message.textContent = 'Login berhasil!';
        } else {
            message.textContent = 'Login gagal. Cek kembali username dan password Anda.';
        }
    });
});
