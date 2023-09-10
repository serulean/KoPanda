const progressBar = document.getElementById("bar");
let barWidth = 0;

const animate = () => {
    barWidth++;
    progressBar.style.width = `${barWidth}%`;
};

// animation starts 0 seconds after page load
setTimeout(() => {
    let intervalID = setInterval(() => {
        if (barWidth === 100) {
        clearInterval(intervalID);
        } else {
        animate();
        }
    }, 200); // 100 = 10s
}, 300);