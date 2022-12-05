const form = document.querySelector('.imd-upload__form');

const pristine = new Pristine(form, {
  classTo: 'img-upload__form',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

const hashtags = document.querySelector('.text__hashtags');
const uploadBtn = document.querySelector('.img-upload__submit');

let messageHashtags = '';

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
      return false;
    }

    if (el.includes('#', 1)) {
      messageHashtags = 'Хэш-теги разделяются пробелами';
      return false;
    }

    if (!el.includes('#')) {
      messageHashtags = 'Хэш-тег начинается с символа # (решётка)';
      return false;
    }

    if (el.length === 1) {
      messageHashtags = 'Хеш-тег не может состоять только из одной решётки';
      return false;
    }

    if (el.length > 20) {
      messageHashtags = 'Максимальная длина одного хэш-тега 20 символов, включая решётку';
      return false;
    }

    if (!(/^#[a-zа-яё0-9]{1,19}$/i.test(el))) {
      messageHashtags = 'Строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.';
      return false;
    }
  });

  return true;
}

pristine.addValidator(hashtags, hashtagsValidator, messageHashtags);

form.addEventListener('submit', () => {
  if (pristine.validate()) {
    uploadBtn.disabled = true;
  } else {
    uploadBtn.disabled = false;
  }
});
