let start_button = document.getElementById('start')
let stop_button = document.getElementById('stop')
const reset_button = document.getElementById('reset')
const write_button = document.getElementById('zapisz')

let ul = document.getElementById('zapisane_czasy') 
let li_count = 0

let seconds = document.getElementById('sekundy')
let minutes = document.getElementById('minuty')
let hours = document.getElementById('godziny')

let interval_id
start_button.addEventListener('click', () => {
    start_button.style.display = 'none'
    stop_button.style.display = 'inline-block'
    interval_id = setInterval(change_time, 1000)
})

stop_button.addEventListener('click', () => {
    start_button.style.display = 'inline-block'
    stop_button.style.display = 'none'
    clearInterval(interval_id)
})

reset_button.addEventListener('click', () => {
    clearInterval(interval_id)
    seconds.textContent = '00'
    minutes.textContent = '00'
    hours.textContent = '00'
    start_button.style.display = 'inline-block'
    stop_button.style.display = 'none'
})

write_button.addEventListener('click', () => {
    let li = document.createElement('li')
    li_count++
    li.textContent = `${li_count}. ${hours.textContent}:${minutes.textContent}:${seconds.textContent}`
    ul.appendChild(li)
})

const change_time = () => {
    let sec = Number(seconds.textContent)
    let min = Number(minutes.textContent)
    let hr = Number(hours.textContent)

    sec++

    if (sec > 59) {
        sec = 0
        min++
        if (min > 59) {
            min = 0
            hr++
        } 
    } 
    if (sec < 10) {
        seconds.textContent = `0${sec}`
    } else {
        seconds.textContent = sec
    }
    if (min < 10) {
        minutes.textContent = `0${min}`
    } else {
        minutes.textContent = min
    }
}