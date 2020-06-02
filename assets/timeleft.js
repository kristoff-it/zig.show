function timeLeft(toDate = "2020-06-07T15:00:00.000Z") {
    var totalSeconds = Math.max(new Date(toDate) - new Date, 0) / 1000;

    var days = Math.floor(totalSeconds / 86400);
    totalSeconds -= days * 86400;

    var hours = Math.floor(totalSeconds / 3600) % 24;
    totalSeconds -= hours * 3600;

    var minutes = Math.floor(totalSeconds / 60) % 60;
    totalSeconds -= minutes * 60;

    var seconds = Math.round(totalSeconds % 60);

    return {
        days,
        hours,
        minutes,
        seconds
    };
}