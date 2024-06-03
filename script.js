let endDate = new Date("2024-06-14T00:00:00").getTime();

let check = setInterval(function() {
    let now = new Date().getTime();
    let distance = endDate - now;

    if (distance < 0) {
        clearInterval(check);
        document.getElementById('day').innerText = "00";
        document.getElementById('hour').innerText = "00";
        document.getElementById('minute').innerText = "00";
        document.getElementById('second').innerText = "00";
        return;
    }

    let day = Math.floor(distance / (24 * 60 * 60 * 1000));
    let hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    let minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
    let second = Math.floor((distance % (60 * 1000)) / 1000);

    document.getElementById('day').innerText = day < 10 ? '0' + day : day;
    document.getElementById('hour').innerText = hour < 10 ? '0' + hour : hour;
    document.getElementById('minute').innerText = minute < 10 ? '0' + minute : minute;
    document.getElementById('second').innerText = second < 10 ? '0' + second : second;
}, 1000);
