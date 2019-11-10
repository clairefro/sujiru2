// number algorithms
import { textToNumber, convertTextToNumber } from "./bin/textToNumber.js";
import { generateRandomNum } from "./bin/generateRandomNum.js";
// speech-related
import { speak } from "./bin/textToSpeech.js"
import { recognizeSpeech } from "./bin/speechToText.js"


// selectors
///////////////////////////////////////////////////////////////////////////////
const startBtn = document.getElementById('start-button');
const mic = document.getElementById('mic-icon');
const numberField = document.getElementById('numberField');
const langSelectorSpeech = document.getElementById('lang-selector-speech')
const langSelectorRecognize = document.getElementById('lang-selector-recognize')
///////////////////////////////////////////////////////////////////////////////

// listeners

// START BUTTON: generate random number and sythesize speech in selected lang
startBtn.addEventListener('click', (e)=> {
  const num = generateRandomNum();
  console.log(num);
  const lang = langSelectorSpeech.value;
  console.log(lang);
  speak(num, lang);
});

// MIC: record speech, display result to numberField
mic.addEventListener('click', (e) => {
  const lang = langSelectorRecognize.value;
    recognizeSpeech(lang)
      .then((result) => numberField.value = convertTextToNumber((result)));
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
