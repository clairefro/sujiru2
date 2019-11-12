const sample = (array) => {
  return array[Math.floor(Math.random() * array.length)];
}

//*********************************************************/
// random numbers by difficulty level
const randomNumSuperEasy = () => {
  // 0 - 10
  return Math.floor((Math.random()*11))
};

const randomNumEasy = () => {
  // 0 - 100
  return Math.floor((Math.random()*101))
};

const randomNumMedium = () => {
  // 0 - 10,000
  const bigNumber = Math.round(Math.random()) === 1;
  // "big number" refers to number greater than 1,000
  if (bigNumber === false) {
    return Math.floor((Math.random()*1001))
  } else {
    return Math.floor((Math.random()*10001)+1000)
  }
};

const randomNumHard = () => {
  // 0 - 999 trillion
  const multipliers = [1000, 1000000, 1000000000, 1000000000000];
  const bigNumber = Math.round(Math.random()) === 1;
  // "big number" refers to number greater than 10,000
  if (bigNumber === false) {
    // 50% chance that number will be 1-999 (case 0) or 1,000-10,000 (case 1)
    let caseNum = Math.round(Math.random());
    switch(caseNum) {
    // 1-1000
    case 0:
      return Math.floor((Math.random()*1001));
    // 1001-10,000
    case 1:
      return Math.floor((Math.random()*10001)+1000);
    }
  } else { // 10,000 to 999 trillion
      // head is random num 1-999
      const head = Math.floor((Math.random()*1000))
      // multiply by thousand, million, billion or trillion
      return head * sample(multipliers);
  }
};

/**********************************************************/

// generates "clean" random numbers (only trailing 0's for numbers larger than 10,000)
const generateRandomNum = (difficulty) => {
  switch(difficulty) {
    case "1": // super easy
      return randomNumSuperEasy();
    case "2": // easy
      return randomNumEasy();
    case "3": // medium
      return randomNumMedium();
    case "4": // hard
      return randomNumHard();
    }
};

export { generateRandomNum };

   // const counts = { "true": 0, "false": 0 };
   // const resultsArray = []
   // for (let i = 0; i < 1000; i++) {
   //    const bool = Math.round(Math.random()) === 1
   //    resultsArray.push(bool);
   //    if (bool === true) {
   //      counts["true"] +=1
   //    } else {
   //      counts["false"] +=1
   //    }
   // }
   // console.log(resultsArray)
   // console.log(counts);
