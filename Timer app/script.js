// script.js
let timerInterval;
let elapsedTime = 0;

document.getElementById('start-button').addEventListener('click', function() {
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(function() {
        elapsedTime += 1000;

        const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

        document.getElementById('hours').innerHTML = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerHTML = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerHTML = String(seconds).padStart(2, '0');
    }, 1000);
});

document.getElementById('stop-button').addEventListener('click', function() {
    clearInterval(timerInterval);
});

document.getElementById('clear-button').addEventListener('click', function() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById('hours').innerHTML = '00';
    document.getElementById('minutes').innerHTML = '00';
    document.getElementById('seconds').innerHTML = '00';
});
