window.addEventListener('DOMContentLoaded', function () {
    countDown();
});

/**
 * カウントダウンの目標日付
 * @type {object}
 */
const futureDate = {
    year: 2022,
    month: 0, // 1月を0として計算する 5月 -> 4
    date: 24,
    hours: 0,
    minutes: 0,
    seconds: 0,
};

function countData() {
    const countDownDate = new Date(futureDate.year, futureDate.month, futureDate.date, futureDate.hours, futureDate.minutes, futureDate.seconds).getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
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
    const dateElement = document.querySelector('[data-count="date"]');
    const hoursElement = document.querySelector('[data-count="hours"]');
    const minutesElement = document.querySelector('[data-count="minutes"]');
    const secondsElement = document.querySelector('[data-count="seconds"]');
    setInterval(() => {
        const data = countData();
        dateElement.textContent = addZero(data.date);
        hoursElement.textContent = addZero(data.hours);
        minutesElement.textContent = addZero(data.minutes);
        secondsElement.textContent = addZero(data.seconds);
    }, 1000);

    function addZero(number) {
        return (Array(2).join('0') + number).slice(-2);
    }
}
