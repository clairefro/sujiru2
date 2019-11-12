//import grammars
import { enTextToNumber } from "./grammarEN.js";


const parseByLang = (input, lang) => {
  // switch(lang) {
  //   case "en-US":
      return enTextToNumber(input);


    // case "2": // easy
    //   return randomNumEasy();
    // case "3": // medium
    //   return randomNumMedium();
    // case "4": // hard
    //   return randomNumHard();

    // else {
    //   return input;
    // }
};



const recognizeSpeech = async (lang) => {
  const promise = new Promise((resolve, reject) => {
    const recognition = new webkitSpeechRecognition(); // Chrome only
    // config
    recognition.lang = lang;

    recognition.start();
    console.log('speech rec init');

    // on result of recognition, resolve promise with transcript
    recognition.addEventListener('result', (event) => {
      if (event.results.length > 0) {
        resolve(event.results[0][0].transcript);
      }
      else {
        reject('try again');
      }
    });
  });
  return await promise;
};


export { recognizeSpeech, parseByLang };
