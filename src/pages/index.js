import "./index.css";
import FormValidator from "../components/FormValidator.js";
import { vacanciesData } from "../utils/vacancies.js";
import VacanciesRender from "../components/VacanciesRender.js";
import Popup from "../components/Popup.js";
import PopupWithVideo from "../components/PopupWithVideo";
import Carousel from "../components/Carousel.js";
import SetFAQEventListeners from "../components/FAQ.js";
import CardsSlider from "../components/CardsSlider.js";
import {
  validationConfig,
  vacanciesConfig,
  vacanciesFormElement,
  formFeedback,
  popupBtn,
  closeBtn,
  popupVideoSelector,
  faqCardsList,
  bigPopupBtn,
  formBig,
  headerElement,
  cardsSliderProps
} from "../utils/constants.js";

// ------------- валидация формы

const formValidation = new FormValidator(validationConfig, formFeedback);
formValidation.enableValidation();

//const bigFormValidation = new FormValidator(validationConfig, formBig);
//bigFormValidation.enableValidation();

// ------------- попап формы

const formPopup = new Popup(".popup__form");
formPopup.setEventListeners();
popupBtn.addEventListener("click", () => {
  formPopup.open();
});

/*const bigPopup = new Popup(".popup__second-form");
bigPopup.setEventListeners();
popupBtn.addEventListener("click", () => {
  bigPopup.open();
});*/

// ------------- попап видео

const popupWithVideo = new PopupWithVideo(popupVideoSelector);
popupWithVideo.setEventListeners();
popupWithVideo.handleClicks();

// ------------- рендер списка вакансий

const handleVacanciesRender = VacanciesRender(vacanciesConfig, vacanciesData);

handleVacanciesRender();

vacanciesFormElement.addEventListener("input", handleVacanciesRender);

// ------------- карусель

const carousel = new Carousel();
carousel.init();
carousel.setListeners();

// ------------- faq event listeners

SetFAQEventListeners(faqCardsList);

// ------------- header slide handler

window.addEventListener('mousemove', (evt) => {
  if(evt.y < 130) {
    headerElement.style.top = 0;
  } else {
    headerElement.style.top = '-130px';
  }
});

// ------------- cards slider

let timeLine = CardsSlider(cardsSliderProps);