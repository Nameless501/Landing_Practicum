import "./index.css";
import FormValidator from "../components/FormValidator.js";
import { vacanciesData } from "../utils/vacancies.js";
import VacanciesRender from '../components/VacanciesRender.js';
import Popup from "../components/Popup.js";
import PopupWithVideo from "../components/PopupWithVideo";
import Carousel from '../components/Carousel.js';
import SetFAQEventListeners from '../components/FAQ.js';
import {
  validationConfig,
  vacanciesConfig,
  vacanciesFormElement,
  formFeedback,
  popupBtn,
  closeBtn,
  popupVideoSelector,
  faqCardsList,
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

// ------------- faq event listeners

SetFAQEventListeners(faqCardsList);

// ------------- faq event listeners

const sliderCardsList = [...document.querySelectorAll('.cards-slider__card')].reverse();
const sliderCardsContainer = document.querySelector('.cards-slider__cards');

function renderSliderCards() {
  sliderCardsList.forEach((card, index) => {
    if(index === 0) {
      card.classList.add('cards-slider__card_active');
    } else {
      card.classList.remove('cards-slider__card_active');
    }

    card.classList.remove('cards-slider__animation_card_rest');
    card.classList.remove('cards-slider__animation_card_first');
    card.classList.remove('cards-slider__animation_card_second');
    card.style.zIndex = index * -1;
    card.parentNode.style.order = sliderCardsList.length - index;
  })
}

renderSliderCards();


function handleSliderAnimationEnd() {
  const firstCard = sliderCardsList.shift()
  sliderCardsList.push(firstCard);

  renderSliderCards();

  sliderCardsContainer.addEventListener('click', handleSliderAnimationStart)
  sliderCardsContainer.removeEventListener('animationend', handleSliderAnimationEnd);
}

function handleSliderAnimationStart() {
  sliderCardsList.forEach((card, index) => {
    if(index === 0) {
      card.classList.add('cards-slider__animation_card_first');
    } else if(index === 1) {
      card.classList.add('cards-slider__animation_card_second');
    } else {
      card.classList.add('cards-slider__animation_card_rest');
    }
  });

  sliderCardsContainer.addEventListener('animationend', handleSliderAnimationEnd);
  sliderCardsContainer.removeEventListener('click', handleSliderAnimationStart);
}

sliderCardsContainer.addEventListener('click', handleSliderAnimationStart);