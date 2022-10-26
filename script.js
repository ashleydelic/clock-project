setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const hourHand = document.querySelector('[data-hour-hand]')
const hourHand = document.querySelector('[data-hour-hand]')
function setClock(){
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
}