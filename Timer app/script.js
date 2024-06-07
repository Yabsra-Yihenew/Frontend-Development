document.getElementById('start-button').addEventListener('click', function() {
    // Set the duration for the countdown (e.g., 1 hour in milliseconds)
    let duration = 60 * 60 * 1000; // 1 hour

    // Update the count down every 1 second
    const countdownFunction = setInterval(function() {
        // Time calculations for hours, minutes and seconds
        const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((duration % (1000 * 60)) / 1000);

        // Output the result in the respective elements
        document.getElementById('hours').innerHTML = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerHTML = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerHTML = String(seconds).padStart(2, '0');

        // Decrease duration by 1 second (1000 milliseconds)
        duration -= 1000;

        // If the count down is over, clear the interval
        if (duration < 0) {
            clearInterval(countdownFunction);
            document.getElementById('countdown').innerHTML = "EXPIRED";
        }
    }, 1000);
});

