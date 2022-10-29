function generateRandom(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function checkLength(verifiedString, maxLength) {
  return (verifiedString.length >= maxLength);
}

export {generateRandom, checkLength};
