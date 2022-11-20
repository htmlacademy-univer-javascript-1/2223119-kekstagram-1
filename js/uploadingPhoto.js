const file = document.querySelector('#upload-file');
const cancelBtn = document.querySelector('#upload-cancel');

file.addEventListener('change', () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
});

file.addEventListener('change', () => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});

const onEscKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', onEscKeyDown);
  }
}

document.addEventListener('keydown', onEscKeyDown);
