import "./index.css";
import FormValidator from "../components/FormValidator.js";
import { validationConfig, vacanciesConfig, vacanciesFormElement, formFeedback, popupBtn, closeBtn, popupVideoSelector } from "../utils/constants.js";
import { vacanciesData } from "../utils/vacancies.js";
import VacanciesRender from '../components/VacanciesRender.js';
import Popup from "../components/Popup.js";
import PopupWithVideo from "../components/PopupWithVideo";
import Carousel from '../components/Carousel.js';

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

// ------------- попап видео

const popupWithVideo = new PopupWithVideo(popupVideoSelector);
popupWithVideo.setEventListeners();
popupWithVideo.handleClicks();

// ------------- рендер списка вакансий

const handleVacanciesRender = VacanciesRender(vacanciesConfig, vacanciesData);

handleVacanciesRender();

vacanciesFormElement.addEventListener('input', handleVacanciesRender);

// ------------- карусель

const carousel = new Carousel();
carousel.init();
carousel.setListeners();

// ------------- test

// window.addEventListener('mousewheel', (evt) => {
//   const element = document.querySelector('.cards-slider');


//   if(window.scrollY > 490) {
//     document.body.style.overflow = 'hidden';
//     element.scrollIntoView({ block: 'center' });
//   }
// });