import "./index.css";
import FormValidator from "../components/FormValidator.js";
import { vacanciesData } from "../utils/vacancies.js";
import VacanciesRender from "../components/VacanciesRender.js";
import Popup from "../components/Popup.js";
import PopupWithVideo from "../components/PopupWithVideo";
import Carousel from "../components/Carousel.js";
import SetFAQEventListeners from "../components/FAQ.js";
import CardsSlider from '../components/CardsSlider.js'
import {
  validationConfig,
  vacanciesConfig,
  vacanciesFormElement,
  formFeedback,
  popupBtn,
  closeBtn,
  popupVideoSelector,
  faqCardsList,
  sliderCardsNodeList,
  cardsSliderConfig,
} from "../utils/constants.js";

// ------------- валидация формы

const validation = new FormValidator(validationConfig, formFeedback);
validation.enableValidation();

// ------------- попап формы

const formPopup = new Popup(".popup__form");
formPopup.setEventListeners();
popupBtn.addEventListener("click", () => {
  formPopup.open();
});


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

// ------------- cards slider

const setCardsSliderListeners = CardsSlider(sliderCardsNodeList, cardsSliderConfig);

setCardsSliderListeners();

const headerElement = document.querySelector('.header');

window.addEventListener('mousemove', (evt) => {
  if(evt.y < 130) {
    headerElement.style.top = 0;
  } else {
    headerElement.style.top = '-130px';
  }
})