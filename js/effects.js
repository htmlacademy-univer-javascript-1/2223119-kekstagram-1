const previewPhoto = document.querySelector('.img-upload__preview img');
const slider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectButtons = document.querySelector('.effects__list');

effectButtons.addEventListener('click', (evt) => {
  if (evt.target.id === 'effect-none') {
    if (slider.noUiSlide) {
      slider.noUiSlider.destroy();
    }
    previewPhoto.style.filter = '';
    effectLevelValue.value = '';
  }
  if (evt.target.id === 'effect-chrome') {
    if (slider.noUiSlide) {
      slider.noUiSlider.destroy();
    }
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
  } else if (evt.target.id === 'effect-sepia') {
    if (slider.noUiSlide) {
      slider.noUiSlider.destroy();
    }
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
  }
  if (evt.target.id === 'effect-marvin') {
    if (slider.noUiSlide) {
      slider.noUiSlider.destroy();
    }
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
  }
  if (evt.target.id === 'effect-phobos') {
    if (slider.noUiSlide) {
      slider.noUiSlider.destroy();
    }
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
  }
  if (evt.target.id === 'effect-heat') {
    if (slider.noUiSlide) {
      slider.noUiSlider.destroy();
    }
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
});

