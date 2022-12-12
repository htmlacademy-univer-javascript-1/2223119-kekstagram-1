const scaleContainer = document.querySelector('.scale');
const smallerButton = scaleContainer.querySelector('.scale__control--smaller');
const biggerButton = scaleContainer.querySelector('.scale__control--bigger');
const scaleValue = scaleContainer.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview img');

const makePhotoSmaller = function () {
  const value = Number(scaleValue.value.replace('%', ''));

  if (value > 25) {
    const newValue = value - 25;
    imageUploadPreview.style.transform = `scale(${newValue / 100})`;
    scaleValue.value = `${newValue}%`;
  }
};

const makePhotoBigger = function () {
  const value = Number(scaleValue.value.replace('%', ''));

  if (value < 100) {
    let newValue = value + 25;
    if (newValue > 100) {
      newValue = 100;
    }
    imageUploadPreview.style.transform = `scale(${newValue / 100})`;
    scaleValue.value = `${newValue}%`;
  }
};

smallerButton.addEventListener('click', makePhotoSmaller);
biggerButton.addEventListener('click', makePhotoBigger);
