import 
    {buttonPlay, 
    buttonSet, 
    buttonAddMinutes, 
    buttonReduceMinutes,
    buttonForestAudio,  
    buttonCoffeAudio,
    buttonRainAudio,
    buttonFileplaceAudio,
    } 
    from './elements.js'

export default function ({timer, controls, sound}) {

     buttonSet.addEventListener('click', function() {
      timer.reset();
      timer.updateMinutes(newMinutes, 0)
    });

    buttonPlay.addEventListener('click', function() {
        timer.countdown();
    });

    buttonAddMinutes.addEventListener('click', function() {
      let newMinutes = controls.newMinutes();

      timer.updateMinutes(newMinutes, 0);
    });

    buttonReduceMinutes.addEventListener('click', function() {
      let reduceMinutes = controls.reduceMinutes();

      timer.updateMinutes(reduceMinutes, 0);
    });

    buttonForestAudio.addEventListener('click', function() {
      sound.forestAudio.play();	
      controls.playForest();
    });

    buttonCoffeAudio.addEventListener('click', function() {
      sound.coffeAudio.play();
      controls.playCoffe();
    });

    buttonRainAudio.addEventListener('click', function() {
      sound.rainAudio.play();
      controls.playRain();
    });

    buttonFileplaceAudio.addEventListener('click', function(){
      sound.fileplaceAudio.play();
      controls.playFileplace();
    });

}

