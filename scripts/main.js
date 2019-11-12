// number algorithms

import { generateRandomNum } from "./bin/generateRandomNum.js";
// speech-related
import { speak } from "./bin/textToSpeech.js"
import { recognizeSpeech, parseByLang } from "./bin/speechToText.js"


// selectors
///////////////////////////////////////////////////////////////////////////////
const body = document.querySelector('body');
const startBtn = document.getElementById('start-button');
const mic = document.getElementById('mic-button');
const checkBtn = document.getElementById('check-button');
const numberField = document.getElementById('numberField');
const langSelectorSpeech = document.getElementById('lang-selector-speech')
const langSelectorRecognize = document.getElementById('lang-selector-recognize')
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');
const listeningScreen = document.getElementById('listeningScreen');
///////////////////////////////////////////////////////////////////////////////
// other globals
let generatedNum = null;
let score = 0;
let lives = 3;
//////////////////////////////////////////////////////////////////////////////

//*************************************************************************
// listeners
//*************************************************************************

// START BUTTON: generate random number and sythesize speech in selected lang
startBtn.addEventListener('click', (e)=> {
  body.style = "background-color: #FFFFFF;"
  e.currentTarget.disabled = true;
  mic.disabled = false;

  const difficulty = document.querySelector('input[name="difficulty"]:checked').value;

  generatedNum = generateRandomNum(difficulty);
  console.log(generatedNum);
  const lang = langSelectorSpeech.value;
  console.log(lang);
  speak(generatedNum, lang);
});

// MIC: record speech, display result to numberField
mic.addEventListener('click', (e) => {
  const lang = langSelectorRecognize.value;
  recognizeSpeech(lang)
    .then((result) => numberField.value = parseByLang(result, lang));
  checkBtn.disabled = false;
});


// CHECK BTN: compares guess with generated num
checkBtn.addEventListener('click', (e) => {
    // compare guesses
    const userGuess = numberField.value;
    console.log(`user guess : ${userGuess}, generated num: ${generatedNum}`);
    if (parseInt(userGuess) === generatedNum) {
      // WIN SITUATION
      body.style = "background-color: #add580;" // green
      score += 1;
      scoreDisplay.innerText = score;

    } else {
      // LOSE SITUATION
      body.style = "background-color: #f0d2d3;" // red
      lives -= 1;
      livesDisplay.innerText = lives;
    }
    // reset buttons and number field
    e.currentTarget.disabled = true;
    mic.disabled = true;
    startBtn.disabled = false;
    numberField.value = "";
  });

// on page load, alert if browser not speech compatible

document.addEventListener("DOMContentLoaded", function() {
  console.log('page loaded');
  if (!('webkitSpeechRecognition' in window)) {
    window.alert("Sorry, your Browser does not support the Speech API. Try Chrome 45+");
  } else {
    console.log("broswer is speech compatible");
  };

});
