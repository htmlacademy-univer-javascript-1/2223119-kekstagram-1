import {changeFilter, cancelFilter} from './effects.js';
import { resetSize } from './scale.js';

const effectButtons = document.querySelector('.effects__list');

const file = document.querySelector('#upload-file');
const cancelBtn = document.querySelector('#upload-cancel');

file.addEventListener('change', () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  effectButtons.addEventListener('click', changeFilter);
});

const onKeyDown =() => {
  cancelFilter();
  resetSize();
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};

// cancelBtn.addEventListener('click', () => {
//   cancelFilter();
//   resetSize();
//   document.querySelector('.img-upload__overlay').classList.add('hidden');
//   document.querySelector('body').classList.remove('modal-open');
// });

const onEscKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    cancelFilter();
    resetSize();
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeyDown);
  }
};

document.addEventListener('keydown', onEscKeyDown);
cancelBtn.addEventListener('click', onKeyDown);

export {onKeyDown};
