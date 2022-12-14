import './index.css';
import Popup from "../components/Popup.js";
import FormValidator from '../components/FormValidator.js';
import {
  shortFormElement,
  validationConfig,
  shortFormButtonNodes,
  popupShortFormSelector,
} from '../utils/constants.js';

// ------------- попап формы

const popupShortForm = new Popup(popupShortFormSelector);

popupShortForm.setEventListeners();

shortFormButtonNodes.forEach(button => {
  button.addEventListener('click', () => {
    popupShortForm.open();
  });
});

// ------------- валидация формы

const shortFormValidation = new FormValidator(validationConfig, shortFormElement);

shortFormValidation.enableValidation();