import generateHoroscopeData from './horoscopeData/hooks/generateHoroscopeData.js'

window.onload = () => {
    const birthdateInput = document.getElementById("birthdateInput");
    birthdateInput.addEventListener("change", () => {
        let zodiacSign = generateHoroscopeData();
    });
};