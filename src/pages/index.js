import "./index.css";
import FormValidator from "../components/FormValidator.js";
import { formFeedback, popupBtn, closeBtn, popupVideoSelector } from "../utils/constants.js";
import { validationConfig } from "../utils/constants.js";
import Popup from "../components/Popup.js";
import PopupWithVideo from "../components/PopupWithVideo";

// ------------- валидация формы

const validation = new FormValidator(validationConfig, formFeedback);
validation.enableValidation();

// ------------- попап формы
const formPopup = new Popup(".popup__form");
formPopup.setEventListeners();
popupBtn.addEventListener("click", () => {
  formPopup.open();
});

/*popupBtn.addEventListener("click", function () {
  popup.classList.add("popup_opened");
});
closeBtn.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});*/

// ------------- попап формы

const popupWithVideo = new PopupWithVideo(popupVideoSelector);
popupWithVideo.setEventListeners();
popupWithVideo.handleClicks();
