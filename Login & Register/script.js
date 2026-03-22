// Hàm hiển thị form Đăng ký (Signup)
function showSignup() {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('login-form').classList.add('hidden');
    
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('active');
}

// Hàm hiển thị form Đăng nhập (Login)
function showLogin() {
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('signup-form').classList.add('hidden');
    
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('active');
}

// Xử lý logic Đăng nhập (Chỉ là demo)
function handleLogin() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    if (email === "" || password === "") {
        alert("Vui lòng nhập Email và Mật khẩu!");
        return;
    }
    
    // Ở đây, bạn sẽ gửi dữ liệu đến server (thường là Python/NodeJS/PHP)
    // Hiện tại, chúng ta chỉ hiển thị thông báo.
    console.log(`Đăng nhập với Email: ${email}`);
    alert("Đăng nhập thành công! (Demo)"); 
    
    // Nếu thành công: window.location.href = "home.html";
}

// Xử lý logic Đăng ký (Chỉ là demo)
function handleSignup() {
    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    const confirm = document.getElementById('signup-confirm').value.trim();

    if (username === "" || email === "" || password === "" || confirm === "") {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    if (password !== confirm) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }

    // Ở đây, bạn sẽ gửi dữ liệu đăng ký đến server
    console.log(`Đăng ký tài khoản mới: ${username}, Email: ${email}`);
    alert("Đăng ký thành công! Quay lại trang đăng nhập.");
    
    // Quay lại trang đăng nhập sau khi đăng ký
    showLogin();
}
function goToHome() {
    window.location.href = "../Home/home.html";
}