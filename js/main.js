function generateRandom(from, before) {
  if (from = before){
    return from;
  }
  if (from > before){
    return Math.round(max + Math.random() * (from - before));
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
