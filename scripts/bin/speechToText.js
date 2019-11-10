
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


export { recognizeSpeech };
