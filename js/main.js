function generateRandom(from, before) {
  if (from < 0) {
    from = 0;
  }
  if (before < 0) {
    before = 0;
  }
  if (from === before){
    return from;
  }
  if (from > before){
    return Math.round(before + Math.random() * (from - before));
  }
  return Math.round(from + Math.random() * (before - from));
}

function checkLength(verifiedString, maxLength) {
  if (verifiedString.length >= maxLength) {
    return false;
  }else{
    return true;
  }
}

generateRandom(10, 20);
checkLength("Привет!", 10);
