const countdown = document.querySelector('.countdown')

// set launch date (milliseconds)
const launchDate = new Date('Jan 29,2020 13:00:00').getTime()

console.log(launchDate)

// update every second
const intvl = setInterval(() => {
  // get today's date and time (milliseconds)
  const now = new Date().getTime()

  // distance from now to the launch date
  const distance = launchDate - now

  // time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))

  const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

  const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))

  const seconds = Math.floor(distance % (1000 * 60) / (1000))

  // display result
  countdown.innerHTML = `
  <div>${days}<span>days</span></div>
  <div>${hours}<span>hours</span></div>
  <div>${minutes}<span>minutes</span></div>
  <div>${seconds}<span>seconds</span></div>
  `

  // if launch date passed
  if (distance < 0) {
    // stop countdown
    clearInterval(intvl)
    // style and output text
    countdown.style.color = '#17a2b8'
    countdown.innerHTML = 'launched!'
  }
}, 1000)
