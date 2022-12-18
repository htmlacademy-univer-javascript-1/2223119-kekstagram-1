const bigPicture = document.querySelector('.big-picture');
const cancelButton = document.querySelector('.big-picture__cancel');
const showMoreCommentsButton = document.querySelector('.comments-loader');
const comment = bigPicture.querySelector('.social__comments');
const shownCommentsCountSection = document.querySelector('.comments-shown-count');

let commentsDataCopy = [];
let shownCommentsCount = 0;

const closeBigPicture = (evt) => {
  if (evt.key === 'Escape' || evt.type === 'click' && evt.target.closest('.big-picture__cancel')) {
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    commentsDataCopy = [];
    document.removeEventListener('keydown', closeBigPicture);
    cancelButton.removeEventListener('click', closeBigPicture);
  }
};

document.addEventListener('keydown', closeBigPicture);
cancelButton.addEventListener('click', closeBigPicture);

const fillingСomments = function (comments, commentTemplate) {
  comments.forEach((i) => {
    const element = commentTemplate.cloneNode(true);

    element.querySelector('p').textContent = i['message'];
    element.querySelector('img').src = i['avatar'];
    element.querySelector('img').alt = i['name'];

    comment.appendChild(element);
  });
};

const showMoreComments = function () {
  const shownComments = commentsDataCopy.splice(0, 5);
  const commentTemplate = bigPicture.querySelector('.social__comments').querySelector('li');

  fillingСomments(shownComments, commentTemplate);

  shownCommentsCount = shownCommentsCount + shownComments.length;
  shownCommentsCountSection.textContent = String(shownCommentsCount);

  if (commentsDataCopy.length === 0) {
    showMoreCommentsButton.removeEventListener('click', showMoreComments);
    showMoreCommentsButton.classList.add('hidden');
  }
};

const displayBigPicture = (picture, photoData) => {
  picture.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');

    const img = bigPicture.querySelector('.big-picture__img').querySelector('img');
    const likes = bigPicture.querySelector('.big-picture__social').querySelector('.likes-count');
    const description = bigPicture.querySelector('.big-picture__social').querySelector('.social__caption');
    const commentCount = bigPicture.querySelector('.social__comment-count').querySelector('.comments-count');
    const commentTemplate = bigPicture.querySelector('.social__comments').querySelector('li');

    img.src = photoData.url;
    likes.textContent = photoData.likes;
    description.textContent = photoData.description;
    commentCount.textContent = photoData.comments.length;
    comment.textContent = '';

    let shownComments = [];

    commentsDataCopy = photoData.comments;
    if (commentsDataCopy.length > 5) {
      shownComments = commentsDataCopy.splice(0, 5);
    } else {
      shownComments = commentsDataCopy;
    }

    fillingСomments(shownComments, commentTemplate);
    shownCommentsCount = shownComments.length;
    shownCommentsCountSection.textContent = String(shownCommentsCount);

    if (shownComments.length < 5) {
      showMoreCommentsButton.classList.add('hidden');
    } else {
      showMoreCommentsButton.classList.remove('hidden');
      showMoreCommentsButton.addEventListener('click', showMoreComments);
    }

    document.querySelector('.social__comment-count').classList.remove('hidden');
    document.body.classList.add('modal-open');
  });
};

const createBigPictures = (photosData) => {
  const pictures = document.querySelectorAll('.picture');

  for (let i = 0; i < photosData.length; i++) {
    displayBigPicture(pictures[i], photosData[i]);
  }
};

export { createBigPictures };
