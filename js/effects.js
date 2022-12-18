const previewPhoto = document.querySelector('.img-upload__preview img');
const slider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectsButton = document.querySelector('.effects__list');

const destroySlider = () => {
  if (slider.noUiSlider) {
    slider.noUiSlider.destroy();
  }
};

const changeFilter = () => {
  effectsButton.addEventListener('click', (evt) => {
    const effectButton = evt.target.closest('.effects__radio');

    if (effectButton) {
      destroySlider();
      if (effectButton.id === 'effect-none') {
        previewPhoto.style.filter = '';
        effectLevelValue.value = '';
      } else if (effectButton.id === 'effect-chrome') {
        noUiSlider.create(slider, {
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.1,
          connect: 'lower',
        });
        slider.noUiSlider.on('update', () => {
          previewPhoto.style.filter = `grayscale(${slider.noUiSlider.get()})`;
          effectLevelValue.value = slider.noUiSlider.get();
        });
      } else if (effectButton.id === 'effect-sepia') {
        noUiSlider.create(slider, {
          range: {
            min: 0,
            max: 1,
          },
          start: 1,
          step: 0.1,
          connect: 'lower',
        });
        slider.noUiSlider.on('update', () => {
          previewPhoto.style.filter = `sepia(${slider.noUiSlider.get()})`;
          effectLevelValue.value = slider.noUiSlider.get();
        });
      } else if (effectButton.id === 'effect-marvin') {
        noUiSlider.create(slider, {
          range: {
            min: 0,
            max: 100,
          },
          start: 100,
          step: 1,
          connect: 'lower',
        });
        slider.noUiSlider.on('update', () => {
          previewPhoto.style.filter = `invert(${slider.noUiSlider.get()}%)`;
          effectLevelValue.value = slider.noUiSlider.get();
        });
      } else if (effectButton.id === 'effect-phobos') {
        noUiSlider.create(slider, {
          range: {
            min: 0,
            max: 3,
          },
          start: 3,
          step: 0.1,
          connect: 'lower',
        });
        slider.noUiSlider.on('update', () => {
          previewPhoto.style.filter = `blur(${slider.noUiSlider.get()}px)`;
          effectLevelValue.value = slider.noUiSlider.get();
        });
      } else if (effectButton.id === 'effect-heat') {
        noUiSlider.create(slider, {
          range: {
            min: 0,
            max: 3,
          },
          start: 3,
          step: 0.1,
          connect: 'lower',
        });
        slider.noUiSlider.on('update', () => {
          previewPhoto.style.filter = `brightness(${slider.noUiSlider.get()})`;
          effectLevelValue.value = slider.noUiSlider.get();
        });
      }
    }
  });
};

const cancelFilter = () => {
  destroySlider();
  previewPhoto.style.filter = '';
  effectLevelValue.value = '';
};

export { changeFilter, cancelFilter };
