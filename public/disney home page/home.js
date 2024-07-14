document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggleBtn");

    toggleBtn.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });

    function updateDateTime() {
        const now = new Date();
        const dateTimeStr = now.toLocaleString();
        document.getElementById("datetime").textContent = dateTimeStr;
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();
});