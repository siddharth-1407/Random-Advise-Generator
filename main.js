const adviceId = document.getElementById('advice_id');
const advice = document.getElementById('advice');
const generateAdviceBtn = document.getElementById('generateAdviceBtn');

const generateAdvice = async () => {
	const responce = await fetch('https://api.adviceslip.com/advice', { cache: 'no-cache' });
	const data = await responce.json();
	adviceId.textContent = data.slip.id;
	advice.textContent = data.slip.advice;
};

generateAdviceBtn.addEventListener('click', () => {
	generateAdvice();
	generateAdviceBtn.classList.add('btn-animation');
	setTimeout(() => {
		generateAdviceBtn.classList.remove('btn-animation');
	}, 100);
});
generateAdvice();
