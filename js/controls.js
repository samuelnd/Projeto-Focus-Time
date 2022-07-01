
export default function Controls ({
    minutesDisplay,
    buttonHoverForest,
    buttonHoverRain,
    buttonRainAudio,
    buttonForestAudio,
    buttonCoffeAudio,
    buttonCoffeSelect,
    buttonFileplaceAudio,
    buttonFileplaceSelect,
}) {
    let minutes = Number(minutesDisplay.textContent);
    
    function playForest () {
        buttonHoverForest.classList.remove('hide');
        buttonForestAudio.classList.add('hide');
    }

    function playRain () {
        buttonHoverRain.classList.remove('hide');
        buttonRainAudio.classList.add('hide');

    }

    function playCoffe () {
        buttonCoffeAudio.classList.add('hide');
        buttonCoffeSelect.classList.remove('hide');
    }

    function playFileplace () {
        buttonFileplaceAudio.classList.add('hide');
        buttonFileplaceSelect.classList.remove('hide');
    }


    function newMinutes() {
         minutes = minutes + 5; 

        return minutes;
    }

    function reduceMinutes() {
        let reduceMax = minutes <= 5

        if(reduceMax) {
            alert("O tempo não pode ser inferior a 5 minutos!")
        } else {
            minutes = minutes - 5;
        }


        return minutes;
    }


    return {
        playForest,
        newMinutes,
        reduceMinutes,
        playRain,
        playCoffe,
        playFileplace
    }

}
