const countdown = document.querySelector('.countdown')

// set launch date (milliseconds)
const launchDate = new Date('Oct 29,2019 13:00:00').getTime()

// update every second
const intvl = setInterval(() => {
  // get today's date and time (milliseconds)
  const now = new Date().getTime

  // distance from now to the launch date
  const distance = launchDate - now

  // time calculations
  const days = math.floor(distance / (1000 * 60 * 60 * 24))

  const hours = math.floor((distance % (1000 * 60 * 60 * 24))) / (1000 * 60 * 60)

  const minutes = math.floor(distance % (1000 * 60 * 60)) / (1000 * 60)

  const seconds = math.floor(distance % (1000 * 60)) / (1000)

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
