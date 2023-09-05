
/* 
    Traccia:
    Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
    Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
*/


const timer = setInterval(function () {

    const timeNow = Date.now();
    const timeOutDate = Date.parse('Wen, 06 Sep 2023 09:30:00');
    let timeLeft = Math.floor((timeOutDate - timeNow) / 1000); //secondsLeft

    const timerElement = document.querySelector('.timer');
    getTimeFromSeconds(timeLeft);

    //timeLeft = 0; //Use it to test the end of the timer.
    if (timeLeft > 0) {

        timerElement.innerHTML = `<h1>${getTimeFromSeconds(timeLeft)}</h1>`;
    } else {
        clearInterval(timer);
        timerElement.innerHTML = `<h1>Buona Lezione!</h1>`;
    }
}, 1000);


/**
 * 
 * @param {number} givenSeconds Seconds to convert
 * @returns {String} Returns a String in format hh:mm:ss
 */
function getTimeFromSeconds(givenSeconds) {
    let hours, minutes, seconds;

    hours = Math.floor(givenSeconds / 3600);
    minutes = Math.floor((givenSeconds - (hours * 3600)) / 60);
    seconds = Math.floor((givenSeconds - (hours * 3600)) - (minutes * 60));

    return `${hours.toString().padStart(2, 0)} : ${minutes.toString().padStart(2, 0)} : ${seconds.toString().padStart(2, 0)}`;
}