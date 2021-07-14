function handleEvent(e, tab) { 
    const tabs = document.getElementsByClassName('tab');
    const tabContent = document.getElementsByClassName('time');
    
    for (let j = 0; j < tabContent.length; j++) {
        tabContent[j].style.display = "none";
    }

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }

    document.getElementById(tab).style.display = "block";
    e.currentTarget.className += " active";
}

// Set the default tab to display on load
document.getElementById("default").click();

// ***DIGITAL CLOCK***

// Method to get the current time
function getCurrentTime() {
    let dateTime = new Date();
    let hour = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    // Concatenate 0 if single digit number
    if (hour < 10) {
        hour = "0" + dateTime.getHours();
    }

    if (min < 10) {
        min = "0" + dateTime.getMinutes();
    }

    if (sec < 10) {
        sec = "0" + dateTime.getSeconds();
    }

    let currentTime = hour + ":" + min + ":" + sec;
    document.querySelector('#digital').innerHTML = currentTime;
}

// Interval every second (1000ms)
setInterval(getCurrentTime, 1000);

// set a specific time - 02:05:30
// dateTime.setHours(2, 5, 30) 

// ***ANALOG CLOCK***

/**
 * Render the clock numbers on the clock
 */
function renderHours() {
    const clock = document.querySelector('.clock');

    for (let k = 1; k <= 12; k++) {
        const wrapper = document.createElement("div");
        wrapper.id = "wrapper" + [k];
        const hours = document.createElement("div");
        hours.className = "hours";
        hours.id = "hr" + [k];
        hours.innerHTML = k;
        wrapper.append(hours);
        clock.append(wrapper);
    }
}

/**
 * Gets current time and set rotation for clock hands  
 */
function handRotation() {
    const currentTime = new Date();
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');

    hourHand.style.transform = "rotate(" + ((currentTime.getHours() / 12) * 360) + "deg)";
    minuteHand.style.transform = "rotate(" + ((currentTime.getMinutes() / 60) * 360) + "deg)";
    secondHand.style.transform = "rotate(" + ((currentTime.getSeconds() / 60) * 360) + "deg)";
}

/**
 * Analog clock init
 */
function analogInit() {
    // Call method every second(1000ms)
    setInterval(handRotation, 1000);
    handRotation();
    renderHours();
}

analogInit();