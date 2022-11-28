import "./index.css";
import FormValidator from "../components/FormValidator.js";
import {formFeedback, popupVideoSelector} from '../utils/constants.js';
import { validationConfig } from "../utils/constants.js";
import PopupWithVideo from "../components/PopupWithVideo";

// ------------- валидация формы

// const validation = new FormValidator(
//   validationConfig,
//   formFeedback
// );
// validation.enableValidation();

const popupWithVideo = new PopupWithVideo(popupVideoSelector);
popupWithVideo.setEventListeners();
popupWithVideo.handleClicks();
