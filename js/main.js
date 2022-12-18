import { createMiniatures } from './miniatures.js';
import { closeModal } from './uploading-photo.js';
import { submitForm } from './validation.js';
import { getData } from './api.js';
import { showSuccess, showError } from './alerts.js';
import { showFilters } from './filters.js';

getData((photos) => {
  createMiniatures(photos);
  showFilters(photos);
});

submitForm(() => {
  closeModal();
  showSuccess();
}, () => {
  closeModal();
  showError();
});
