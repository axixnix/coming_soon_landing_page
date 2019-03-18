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
}, 1000)
