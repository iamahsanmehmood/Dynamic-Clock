function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12; // Convert 24-hour time to 12-hour format

    const stepSize = 30; // Space between digits
    const clockContainer = document.getElementById('clock-container');
    clockContainer.innerHTML = ''; // Clear previous digits

    // Function to draw a line for a given value and angle
    function drawLine(value, angle, radius, color) {
        const radians = (angle - 90) * (Math.PI / 180); // Adjust to 12 o'clock

        for (let i = 1; i <= radius / stepSize; i++) {
            const digit = document.createElement('div');
            digit.textContent = value;
            digit.className = 'digit-line';
            digit.style.color = color;

            const x = 150 + i * stepSize * Math.cos(radians);
            const y = 150 + i * stepSize * Math.sin(radians);

            digit.style.left = `${x}px`;
            digit.style.top = `${y}px`;
            clockContainer.appendChild(digit);
        }
    }

    // Draw Seconds Line
    const secondsAngle = (seconds / 60) * 360;
    drawLine(seconds, secondsAngle, 130, '#ff0000'); // Red color for seconds

    // Draw Minutes Line
    const minutesAngle = (minutes / 60) * 360;
    drawLine(minutes, minutesAngle, 100, '#00bfff'); // Blue color for minutes

    // Draw Hours Line
    const hoursAngle = (hours / 12) * 360 + (minutes / 60) * 30; // Adjust for minutes
    drawLine(hours, hoursAngle, 70, '#228B22'); // Green color for hours
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock
updateClock();