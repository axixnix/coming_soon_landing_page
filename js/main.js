const countdown = document.querySelector('.countdown')

//set launch date (milliseconds)
const launchDate = new Date('Oct 29,2019 13:00:00').getTime()

//update every second
const intvl = setInterval(()=>{
    //get today's date and time (milliseconds)
    const now = new Date().getTime

    //distance from now to the launch date
    const distance = launchDate - now

},1000)