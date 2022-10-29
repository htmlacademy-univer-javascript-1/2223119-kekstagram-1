import {generateRandom} from './util.js';

const DESCRIPTIONS = [
  'Это я в Туриции была, сейчас уже дома',
  'Всем хорошего настроения в этот замечательный день',
  'С мамой и бабушкой на даче',
  'Моя собака',
  'Сегодня такая хорошая погода, так и хочется остаться дома',
  'Мама попросила сделать лицо попроще. Ну я и сделала...'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Влада',
  'Виталия',
  'Аня',
  'Миша',
  'Дима',
  'Артём'
];

function generateComment(number) {
  const message = Array(generateRandom(1, 2));
  for (let i = 0; i < message - 1; i++) {
    message[i] = COMMENTS[generateRandom(0, COMMENTS.length - 1)];
  }

  return {
    id: number,
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
