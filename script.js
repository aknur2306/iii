function switchMode() {
    if (mode === "work") {
        mode = "break";
        timeLeft = 5 * 60; // 5 минут на перерыв
        document.body.classList.remove("work-mode");
        document.body.classList.add("break-mode");
    } else {
        mode = "work";
        timeLeft = 25 * 60;
        document.body.classList.remove("break-mode");
        document.body.classList.add("work-mode");
        cycles++;
        cycleCount.textContent = cycles;
    }
    timerDisplay.textContent = formatTime(timeLeft);
    startTimer();
}
