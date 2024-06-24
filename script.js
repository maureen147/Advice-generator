const number = document.getElementById('number');
const advice = document.getElementById('advice');
const dice = document.getElementById('dice');

// console.log(advice.innerHTML);
// advice.innerHTML = 'do your best'



const baseUrl = 'https://api.adviceslip.com/advice'
 
const getAdvice = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data.slip);
    advice.innerHTML = data.slip.advice;
    number.innerHTML = data.slip.id;
}

// getAdvice();
window.addEventListener('load', getAdvice)

dice.addEventListener('click', getAdvice);