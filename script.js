window.addEventListener('DOMContentLoaded', function () {
    countDown();
});

const futureDate = {
    year: 2022,
    month: 5,
    date: 5,
    hours: 0,
    minutes: 0,
    seconds: 0,
};

function countData() {
    const countDownDate = new Date(futureDate.year, futureDate.month - 1, futureDate.date, futureDate.hours, futureDate.minutes, futureDate.seconds).getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    if (distance < 0) {
        // 期限切れた場合
        return false;
    }
    const date = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const data = {
        date: date,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
    return data;
}

function countDown() {
    const timerElement = document.querySelector('[data-count="timer"]');
    const expiredElement = document.querySelector('[data-count="expired"]');
    const dateElement = document.querySelector('[data-count="date"]');
    const hoursElement = document.querySelector('[data-count="hours"]');
    const minutesElement = document.querySelector('[data-count="minutes"]');
    const secondsElement = document.querySelector('[data-count="seconds"]');
    setData(true);
    const interval = setInterval(() => {
        setData();
    }, 1000);
    function setData(init) {
        const data = countData();
        if (!data) {
            if (!init) {
                clearInterval(interval);
            }
            timerElement.classList.add('is-hidden');
            expiredElement.classList.add('is-active');
        } else {
            dateElement.textContent = addZero(data.date);
            hoursElement.textContent = addZero(data.hours);
            minutesElement.textContent = addZero(data.minutes);
            secondsElement.textContent = addZero(data.seconds);
        }
    }

    function addZero(number) {
        if (String(number).length < 3) {
            return (Array(2).join('0') + number).slice(-2);
        }
        return number;
    }
}
