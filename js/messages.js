const showSuccess = () => {
  const closeModal = (evt) => {
    if (evt.key === 'Escape') {
      document.removeEventListener('click', closeModal);
      document.removeEventListener('keydown', closeModal);
      document.querySelector('.success').remove();
    } else if (evt.type === 'click') {
      const successInner = evt.target.closest('.success__inner');
      const successButton = evt.target.closest('.success__button');

      if ((successInner && successButton) || (!successInner && !successButton)) {
        document.removeEventListener('click', closeModal);
        document.removeEventListener('keydown', closeModal);
        document.querySelector('.success').remove();
      }
    }
  };

  document.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModal);
  document.body.append(document.querySelector('#success').content.cloneNode(true));
};

const showError = () => {
  const closeModal = (evt) => {
    if (evt.key === 'Escape') {
      document.removeEventListener('click', closeModal);
      document.removeEventListener('keydown', closeModal);
      document.querySelector('.error').remove();
    } else if (evt.type === 'click') {
      const errorInner = evt.target.closest('.error__inner');
      const errorButton = evt.target.closest('.error__button');

      if ((errorInner && errorButton) || (!errorInner && !errorButton)) {
        document.removeEventListener('click', closeModal);
        document.removeEventListener('keydown', closeModal);
        document.querySelector('.error').remove();
      }
    }
  };

  document.addEventListener('click', closeModal);
  document.addEventListener('keydown', closeModal);
  document.body.append(document.querySelector('#error').content.cloneNode(true));
};

export {showSuccess, showError};
