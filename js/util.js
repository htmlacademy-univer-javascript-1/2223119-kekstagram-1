import {generateRandom, DESCRIPTIONS, COMMENTS, NAMES} from './data.js';

function generateComment(i) {
  const message = Array(generateRandom(1, 2));
  for (let i = 0; i < message - 1; i++) {
    message[i] = COMMENTS[generateRandom(0, COMMENTS.length - 1)];
  }

  return {
    id: i,
    avatar: `img/avatar-${generateRandom(1, 6)}.svg`,
    message: message,
    name: NAMES[generateRandom(0, NAMES.length - 1)]
  };
}

function generateDescription(identifier){
  const comments = Array(3);
  for (let i = 0; i < 3; i++) {
    comments[i] = generateComment(i + 1);
  }

  return {
    id: identifier,
    url: 'photos/identifier.jpg',
    descriptions: DESCRIPTIONS[generateRandom(0, DESCRIPTIONS.length - 1)],
    likes: generateRandom(15, 200),
    comments: comments
  };
}

function generateDescriptions(){
  const descriptions = Array(25);
  for (let i = 0; i < 25; i++) {
    descriptions[i] = generateDescription(i + 1);
  }
  return (descriptions);
}

export {generateDescriptions};
