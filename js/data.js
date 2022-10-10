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

function generateRandom(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

export {generateRandom, DESCRIPTIONS, COMMENTS, NAMES};



function checkLength(verifiedString, maxLength) {
  return (verifiedString.length >= maxLength);
}
checkLength('Привет!', 10);
