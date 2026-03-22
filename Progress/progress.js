let myChart; // Biến toàn cục để lưu trữ biểu đồ

document.addEventListener("DOMContentLoaded", () => {
    renderChart('bar'); // Mặc định hiện biểu đồ cột khi vào trang
});

function getRealData() {
    // 1. Lấy dữ liệu Checklist
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const checklistPercent = savedTasks.length > 0 
        ? Math.round((savedTasks.filter(t => t.completed).length / savedTasks.length) * 100) 
        : 0;

    // 2. Lấy dữ liệu Học tập (Giả sử mục tiêu 180p)
    const studyMinutes = parseInt(localStorage.getItem("studyMinutes")) || 0;
    const studyPercent = Math.min(Math.round((studyMinutes / 180) * 100), 100);

    // 3. Lấy dữ liệu Nghỉ ngơi (Giả sử mục tiêu 60p)
    const restMinutes = parseInt(localStorage.getItem("restMinutes")) || 0;
    const restPercent = Math.min(Math.round((restMinutes / 60) * 100), 100);

    return [checklistPercent, studyPercent, restPercent];
}

function renderChart(type) {
    const ctx = document.getElementById('myChart').getContext('2d');
    const dataValues = getRealData();

    // Nếu biểu đồ đã tồn tại thì xóa đi để vẽ mới
    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: ['Checklist (%)', 'Học tập (%)', 'Nghỉ ngơi (%)'],
            datasets: [{
                label: 'Tiến độ (%)',
                data: dataValues,
                backgroundColor: [
                    'rgba(248, 131, 121, 0.6)', // Màu hồng Carrot
                    'rgba(255, 206, 86, 0.6)',  // Màu vàng
                    'rgba(75, 192, 192, 0.6)'   // Màu xanh lá
                ],
                borderColor: [
                    'rgba(248, 131, 121, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: type === 'pie' || type === 'doughnut' || type === 'radar' ? {} : {
                y: { beginAtZero: true, max: 100 }
            }
        }
    });
}

// Hàm cập nhật khi người dùng chọn trong Dropdown
function updateChartType() {
    const selectedType = document.getElementById('chartType').value;
    renderChart(selectedType);
}