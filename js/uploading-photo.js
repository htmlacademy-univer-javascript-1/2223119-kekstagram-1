import { changeFilter, cancelFilter } from './effects.js';
import { resetSize } from './scale.js';

const effectsButton = document.querySelector('.effects__list');
const file = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const fileInput = document.querySelector('.img-upload__input');
const photoPreview = document.querySelector('.img-upload__preview').querySelector('img');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

fileInput.addEventListener('change', () => {
  const fileName = fileInput.files[0];

  if (FILE_TYPES.some((type) => fileName.name.toLowerCase().endsWith(type))) {
    photoPreview.src = URL.createObjectURL(fileName);
  }
});

file.addEventListener('change', () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  effectsButton.addEventListener('click', changeFilter);
});

const closeModal = (evt) => {
  if (evt.key === 'Escape' || evt.type === 'click' && evt.target.closest('#upload-cancel')) {
    cancelFilter();
    resetSize();
    document.querySelector('.text__hashtags').textContent = '';
    document.querySelector('.text__description').textContent = '';
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', closeModal);
    cancelButton.removeEventListener('click', closeModal);
  }
};

document.addEventListener('keydown', closeModal);
cancelButton.addEventListener('click', closeModal);

export { closeModal };
