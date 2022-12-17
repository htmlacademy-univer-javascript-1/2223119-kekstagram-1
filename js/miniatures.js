import {createBigPictures} from './bigPhoto.js';

const picturesContainer = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content.querySelector('.picture');

const fragment = document.createDocumentFragment();

const createMiniatures = (descriptions) => {
  descriptions.forEach((description) => {
    const photo = templateFragment.cloneNode(true);

    photo.querySelector('.picture__img').src = description.url;
    photo.querySelector('.picture__likes').textContent = description.likes;
    photo.querySelector('.picture__comments').textContent = description.comments.length;

    fragment.appendChild(photo);
  });

  picturesContainer.appendChild(fragment);
  createBigPictures(descriptions);
};

export {createMiniatures};
