import {generateDescriptions} from './data.js';

const bigPicture = document.querySelector('.big-picture');
const pictures = document.querySelectorAll('.picture');
const buttonCancel = document.querySelector('.big-picture__cancel');
const photosData = generateDescriptions();

const clickEsc = (evt) => {
  if (evt.key === 'Escape') {
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  };
};

document.addEventListener('keydown', clickEsc);

buttonCancel.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.querySelector('bady').classList.remove('modal-open')
});

const displayBigPicture = (picture, photoData) => {
  picture.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');

    const img = bigPicture.querySelector('.big-picture__img').querySelector('img');
    const likes = bigPicture.querySelector('.big-picture__social').querySelector('.likes-count');
    const description = bigPicture.querySelector('.big-picture__social').querySelector('.social__caption');
    const commentCount = bigPicture.querySelector('.social__comment-count').querySelector('.comments-count');
    const comment = bigPicture.querySelector('.social__comments');

    const commentLi = comment.querySelector('li');

    img.src = photoData.url;
    likes.textContent = photoData.likes;
    description.textContent = photoData.description;
    commentCount.textContent = photoData.comments.length;
    comment.innerHTML = '';

    photoData.comments.forEach((photoDataComment) => {
      const element = commentLi.cloneNode(true);

      element.querySelector('p').textContent = photoDataComment['message'];
      element.querySelector('img').src = photoDataComment['avatar'];
      element.querySelector('img').alt = photoDataComment['name'];

      comment.appendChild(element);
    });

    document.querySelector('.social__comment-count').classList.add('hidden');
    document.querySelector('.comments-loader').classList.add('hidden');
    document.querySelector('.body').classList.add('modal-open');
  });
};

const createBigPictures = () => {
  for (let i = 0; i < pictures.length; i++) {
    displayBigPicture(pictures[i], photosData[i])
  }
};

createBigPictures();
