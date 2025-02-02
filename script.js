const body = document.body;
const currentYear = new Date().getFullYear(); // 현재 연도 가져오기
const nextYear = currentYear + 1; // 다음 연도
document.getElementById('new-year-message').textContent = `${nextYear} New Year is Coming! :)`;

const endTime = new Date(`${currentYear}-12-31T23:59:59`); // 12월 31일 23:59:59로 설정
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

setInterval(updateCountdown, 1000)
setInterval(createSnowFlake, 50);

function updateCountdown() {
	const startTime = new Date();
	const diff = endTime - startTime;
	const days = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(diff / 1000 / 60) % 60;
	const seconds = Math.floor(diff / 1000) % 60;
	daysEl.innerHTML = days;
	hoursEl.innerHTML = hours < 10 ? '0'+hours : hours;
	minutesEl.innerHTML = minutes < 10 ? '0'+minutes : minutes;
	secondsEl.innerHTML = seconds < 10 ? '0'+seconds : seconds;
}

function createSnowFlake() {
	const snow_flake = document.createElement('i');
	snow_flake.classList.add('fas');
	snow_flake.classList.add('fa-snowflake');
	snow_flake.style.left = Math.random() * window.innerWidth + 'px';
	snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
	snow_flake.style.opacity = Math.random();
	snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';
	
	document.body.appendChild(snow_flake);
	
	setTimeout(() => {
		snow_flake.remove();
	}, 5000)
}