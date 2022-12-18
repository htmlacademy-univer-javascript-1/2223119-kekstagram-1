import { sendData } from './api.js';

const form = document.querySelector('.img-upload__form');
const hashtags = document.querySelector('.text__hashtags');
const uploadButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine(form, {
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

let messageHashtags = '';
let flag = true;

function hashtagsValidator (verifiable) {
  messageHashtags = '';
  const cleanHashtag = verifiable.toLowerCase().split(/\s+/);

  if (cleanHashtag.length === 1 && cleanHashtag[0].length === 0) {
    return true;
  }

  if (cleanHashtag.length > 5) {
    messageHashtags = 'Нельзя указать больше пяти хэш-тегов';
    return false;
  }

  cleanHashtag.forEach((el) => {
    if (cleanHashtag.includes(el, cleanHashtag.indexOf(el) + 1)) {
      messageHashtags = 'Один и тот же хэш-тег не может быть использован дважды';
      flag = false;
    } else if (el.includes('#', 1)) {
      messageHashtags = 'Хэш-теги разделяются пробелами';
      flag = false;
    } else if (!el.includes('#')) {
      messageHashtags = 'Хэш-тег начинается с символа # (решётка)';
      flag = false;
    } else if (el.length === 1) {
      messageHashtags = 'Хеш-тег не может состоять только из одной решётки';
      flag = false;
    } else if (el.length > 20) {
      messageHashtags = 'Максимальная длина одного хэш-тега 20 символов, включая решётку';
      flag = false;
    } else if (!(/^#[a-zа-яё0-9]{1,19}$/i.test(el))) {
      messageHashtags = 'Строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.';
      flag = false;
    }
  });

  return flag;
}

pristine.addValidator(hashtags, hashtagsValidator, () => messageHashtags);

const submitForm = (onSuccess, onError) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      uploadButton.disabled = true;
      sendData(
        () => {
          onSuccess();
          uploadButton.disabled = true;
        },
        () => {
          onError();
          uploadButton.disabled = false;
        },
        new FormData(form)
      );
    }
  });
};

export { submitForm };
