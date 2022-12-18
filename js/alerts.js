const showSuccess = () => {
  const closeAlert = (evt) => {
    if (evt.key === 'Escape' || evt.type === 'click' && evt.target.closest('.success__button')) {
      document.removeEventListener('click', closeAlert);
      document.removeEventListener('keydown', closeAlert);
      document.body.querySelector('.success').remove();
    }
  };

  document.addEventListener('click', closeAlert);
  document.addEventListener('keydown', closeAlert);
  document.body.append(document.querySelector('#success').content.cloneNode(true));
};

const showError = () => {
  const closeAlert = (evt) => {
    if (evt.key === 'Escape' || evt.type === 'click' && evt.target.closest('.error__button')) {
      document.removeEventListener('click', closeAlert);
      document.removeEventListener('keydown', closeAlert);
      document.querySelector('.error').remove();
    }
  };

  document.addEventListener('click', closeAlert);
  document.addEventListener('keydown', closeAlert);
  document.body.append(document.querySelector('#error').content.cloneNode(true));
};

export { showSuccess, showError };
