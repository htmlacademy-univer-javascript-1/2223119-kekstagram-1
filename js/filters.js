import { debounce, generateRandom } from './util.js';
import { createMiniatures } from './miniatures.js';

const TIMEOUT_DELAY = 500;

const filters = document.querySelector('.img-filters');
const filtersForm = document.querySelector('.img-filters__form');

let originalPhotos;

const filterPhotos = (eliminationRattle) => {
  filtersForm.addEventListener('click', (evt) => {
    const filterButton = evt.target.closest('.img-filters__button');

    if (filterButton) {
      document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
      filterButton.classList.add('img-filters__button--active');

      if (filterButton.id === 'filter-random') {
        const copyPhotos = originalPhotos.slice();
        const photos = [];

        while (photos.length !== 10) {
          const randomIndex = generateRandom(0, copyPhotos.length - 1);
          photos.push(copyPhotos[randomIndex]);
          copyPhotos.splice(randomIndex, 1);
        }
        eliminationRattle(photos);
      } else if (filterButton.id === 'filter-discussed') {
        eliminationRattle(originalPhotos.slice().sort((a, b) => b.comments.length - a.comments.length));
      } else {
        eliminationRattle(originalPhotos);
      }
    }
  });
};

const showFilters = (photos) => {
  filters.classList.remove('img-filters--inactive');
  originalPhotos = photos;
  filterPhotos(debounce((filterData) => createMiniatures(filterData), TIMEOUT_DELAY));
};

export { showFilters };
