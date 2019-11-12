// strip noise (円など)
const jpTextToNumber = (original_input) => {
   result = original_input.replace(/円/g, '');
   return result
};
