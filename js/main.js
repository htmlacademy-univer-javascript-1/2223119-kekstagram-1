import {createMiniatures} from './miniatures.js';
import './bigPhoto.js';
import {onKeyDown} from './uploadingPhoto.js';
import {submitForm} from './validation.js';
import { getData } from './api.js';
import {showSuccess, showError} from './messages.js';

getData((photos) => {
  createMiniatures(photos);
});

submitForm(() => {
  onKeyDown();
  document.body.append(document.querySelector('#success').content.cloneNode(true));
  showSuccess();
}, () => {
  onKeyDown();
  showError();
});
