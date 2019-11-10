const speak = (content, lang) => {
  const u = new SpeechSynthesisUtterance();
  u.text = content;
  u.lang = lang;
  u.rate = 1;
  u.onend = (event) => {
    console.log('Finished in ' + event.elapsedTime + ' seconds.');
  };
  speechSynthesis.speak(u);
}

export { speak };


// const score = 0;
// const lives = 3;
// const randomNumber = 0;
// const userTranslation = '';


// $("#startButton").click(function(){
//   disableStart();
//   enableCheck();//change event later to enable check when speech rec is finished
//   randomNumber = generateRan();
//   $("#userTranslation").val(randomNumber); //remove later - testing only
// });

// //check user translation on clicking check button
// $("#checkButton").click(function(){
//   disableCheck();
//   userTranslation = $("#userTranslation").val();

//   //user translation MATCHES random number
//   if(userTranslation == randomNumber){
//     $("#userTranslation").val("yes!!!!");
//     score++;
//     $("#score").html(score);
//     enableStart();
//   }
//   //user transalation does NOT MATCH random number
//   else {
//     $("#userTranslation").val("no:(((");
//     lives--;

//     //end game if out of lives
//     if(lives<1){
//       $("#lives").html("GAME OVER");
//     }
//     else{
//       $("#lives").html(lives);
//       enableStart();
//     }
//   }
// });





//     //disable start button
//     function disableStart(){
//       $("#startButton").prop("disabled",true);
//     }

//     //disable check button
//     function disableCheck(){
//       $("#checkButton").prop("disabled",true);
//     }

//     //enable start button
//     function enableStart(){
//       $("#startButton").prop("disabled",false);
//     }

//     //enable check button
//     function enableCheck(){
//       $("#checkButton").prop("disabled",false);
//     }
