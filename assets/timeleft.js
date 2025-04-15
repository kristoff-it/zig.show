function timeLeft(toDate = "2020-06-07T15:00:00.000Z") {
    var totalSeconds = (new Date(toDate) - new Date) / 1000;

    // are we past the target by more than 2h?
    if (totalSeconds < (-60 * 60 * 2)) {
        // :)
        return false;
    }

    // Are past the target at all?
    if (totalSeconds < 0) {
        return true;
    }

    totalSeconds = Math.max(totalSeconds, 0);

    var days = Math.floor(totalSeconds / 86400);
    totalSeconds -= days * 86400;

    var hours = Math.floor(totalSeconds / 3600) % 24;
    totalSeconds -= hours * 3600;

    var minutes = Math.floor(totalSeconds / 60) % 60;
    totalSeconds -= minutes * 60;

    var seconds = Math.floor(totalSeconds % 60);

    return {
        days,
        hours,
        minutes,
        seconds
    };
}

function updateCountdown() {
  var countdownDiv = document.getElementById("countdown");
  if (!countdownDiv) return;
  
  let stamp = countdownDiv.dataset.time;
  if (!stamp) return;

  var timeLeftFromNow = timeLeft(stamp);

  if (timeLeftFromNow === false) {
    countdownDiv.textContent = "NEXT SHOWTIME WILL BE ANNOUNCED SOON!"
    countdownDiv.classList.remove("blink");
    return;
  }

  if (timeLeftFromNow === true) {
    countdownDiv.textContent = "LIVE NOW!"
    countdownDiv.classList.add("blink");
  } else {
    const s = timeLeftFromNow.days === 1 ? "" : "S";
    countdownDiv.textContent =
        timeLeftFromNow.days + " DAY"+s+" "
      + timeLeftFromNow.hours.toString().padStart(2, '0') + "h:"
      + timeLeftFromNow.minutes.toString().padStart(2, '0') + "m:"
      + timeLeftFromNow.seconds.toString().padStart(2, '0') + "s";
  } 

  setTimeout(runUpdateTimeout, 100);
}

function runUpdateTimeout() {
  window.requestAnimationFrame(updateCountdown);
}

updateCountdown();
