let time = 25 * 60; // 25 phút
let timerInterval = null;

/* BUNNY NAME */
document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("bunnyName") || "Bunny";
  document.querySelectorAll(".bunnyName").forEach(e => e.textContent = name);
  updateDisplay();
});

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  document.getElementById("timer").textContent =
    `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("🎉 Hoàn thành phiên học!");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  time = 25 * 60;
  updateDisplay();
}
let initialMinutes = 25;
let timeLeft = initialMinutes * 60;
let timerId = null;

const timerDisplay = document.getElementById('timer');
const timerWrapper = document.getElementById('timerWrapper');

function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerDisplay.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function adjustTime(amount) {
    if (timerId !== null) return; // Không cho chỉnh khi đang chạy
    
    initialMinutes += amount;
    if (initialMinutes < 1) initialMinutes = 1; // Tối thiểu 1 phút
    if (initialMinutes > 120) initialMinutes = 120; // Tối đa 120 phút
    
    timeLeft = initialMinutes * 60;
    updateDisplay();
}

function startTimer() {
    if (timerId !== null) return;
    timerWrapper.classList.add('running'); // Làm mờ nút chỉnh

    timerId = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
     } else {
    clearInterval(timerId);
    timerId = null;
    timerWrapper.classList.remove('running');
    
    // Lấy tên Bunny từ biến hoặc localStorage
    const bunnyName = document.querySelector('.bunnyName')?.innerText || "Bunny";
    
    // Sử dụng dấu huyền ` và ${} để truyền tên vào chuỗi
    alert(`Đã hết giờ! ${bunnyName} tặng bạn 1 củ cà rốt 🥕`);
}
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = null;
    timerWrapper.classList.remove('running');
}

function resetTimer() {
    pauseTimer();
    timeLeft = initialMinutes * 60;
    updateDisplay();
}