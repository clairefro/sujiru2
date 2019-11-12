// ex: '3 billion' -> 3000000000
const enTextToNumber = (original_input) => {
  let result = 0;
  const bigNumberPattern = /(?:(\d+)\s((?:b|m|tr)illion))/g;
  let matches = null;
  let lastMatchIndex = null;
  while ((matches = bigNumberPattern.exec(original_input)) !== null) {
    result += textToNumber(matches[1], matches[2]);
    lastMatchIndex = bigNumberPattern.lastIndex;
  }
  var remainder = parseInt(original_input.slice(lastMatchIndex).trim());
  return result + (isNaN(remainder) ? 0 : remainder);
}

const textToNumber = (num, str) => {
  switch (str) {
    case 'million':
      return Math.pow(10, 6) * num;
    case 'billion':
      return Math.pow(10, 9) * num;
    case 'trillion':
      return Math.pow(10, 12) * num;
    default:
      return num;
  }
}

export { enTextToNumber };
