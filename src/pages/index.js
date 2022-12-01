import "./index.css";
import FormValidator from "../components/FormValidator.js";
import { vacanciesData } from "../utils/vacancies.js";
import VacanciesRender from "../components/VacanciesRender.js";
import Popup from "../components/Popup.js";
import PopupWithVideo from "../components/PopupWithVideo";
import Carousel from "../components/Carousel.js";
import SetFAQEventListeners from "../components/FAQ.js";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// import CardsSlider from "../components/CardsSlider.js";

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
  bigPopupBtn,
  formBig,
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

// ------------- cards slider

// const setCardsSliderListeners = CardsSlider(
//   sliderCardsNodeList,
//   cardsSliderConfig
// );

// setCardsSliderListeners();

const headerElement = document.querySelector('.header');

window.addEventListener('mousemove', (evt) => {
  if(evt.y < 130) {
    headerElement.style.top = 0;
  } else {
    headerElement.style.top = '-130px';
  }
});

const cards = ['.cards-slider__card_1', '.cards-slider__card_2', '.cards-slider__card_3', '.cards-slider__card_4', '.cards-slider__card_5', '.cards-slider__card_6']
const cardsBlur = ['.cards-slider__card-blur_card_1', '.cards-slider__card-blur_card_2', '.cards-slider__card-blur_card_3', '.cards-slider__card-blur_card_4', '.cards-slider__card-blur_card_5', '.cards-slider__card-blur_card_6']


let timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.cards-slider__cards',
    start: 'top 200px',
    end: 'bottom',
    scrub: 1,
    markers: true,
    smoothChildTiming: true,
    toggleActions: "play pause none reset",
  }
})

const duration = 1;


timeline.addLabel("stage_1", 1)
.to(cards[0], {zIndex: -1, duration: 0.4}, "stage_1")
.to(cardsBlur[0], {duration: 0.4, opacity: 1}, "stage_1")
.to(cardsBlur[1], {duration: 0.4, opacity: 0}, "stage_1")

timeline.addLabel("stage_2", 2)
.to(cards[0], {x: 812, duration: duration}, "stage_2")
.to(cards[1], {x: -163, duration: duration}, "stage_2")
.to(cards[2], {x: -163, duration: duration}, "stage_2")
.to(cards[3], {x: -163, duration: duration}, "stage_2")
.to(cards[4], {x: -163, duration: duration}, "stage_2")
.to(cards[5], {x: -163, duration: duration}, "stage_2")

timeline.addLabel("stage_3", 3)
.to(cards[1], {zIndex: -1, duration: 0.4}, "stage_3")
.to(cardsBlur[1], {duration: 0.4, opacity: 1}, "stage_3")
.to(cardsBlur[2], {duration: 0.4, opacity: 0}, "stage_3")

timeline.addLabel("stage_4", 4)
.to(cards[0], {x: 649, duration: duration}, "stage_4")
.to(cards[1], {x: 652, duration: duration}, "stage_4")
.to(cards[2], {x: -326, duration: duration}, "stage_4")
.to(cards[3], {x: -326, duration: duration}, "stage_4")
.to(cards[4], {x: -326, duration: duration}, "stage_4")
.to(cards[5], {x: -326, duration: duration}, "stage_4")

timeline.addLabel("stage_5", 5)
.to(cards[2], {zIndex: -1, duration: 0.4}, "stage_5")
.to(cardsBlur[2], {duration: 0.4, opacity: 1}, "stage_5")
.to(cardsBlur[3], {duration: 0.4, opacity: 0}, "stage_5")

timeline.addLabel("stage_6", 6)
.to(cards[0], {x: 486, duration: duration}, "stage_6")
.to(cards[1], {x: 489, duration: duration}, "stage_6")
.to(cards[2], {x: 489, duration: duration}, "stage_6")
.to(cards[3], {x: -489, duration: duration}, "stage_6")
.to(cards[4], {x: -489, duration: duration}, "stage_6")
.to(cards[5], {x: -489, duration: duration}, "stage_6")

timeline.addLabel("stage_7", 7)
.to(cards[3], {zIndex: -1, duration: 0.4}, "stage_7")
.to(cardsBlur[3], {duration: 0.4, opacity: 1}, "stage_7")
.to(cardsBlur[4], {duration: 0.4, opacity: 0}, "stage_7")

timeline.addLabel("stage_8", 8)
.to(cards[0], {x: 323, duration: duration}, "stage_8")
.to(cards[1], {x: 326, duration: duration}, "stage_8")
.to(cards[2], {x: 326, duration: duration}, "stage_8")
.to(cards[3], {x: 326, duration: duration}, "stage_8")
.to(cards[4], {x: -652, duration: duration}, "stage_8")
.to(cards[5], {x: -652, duration: duration}, "stage_8")

timeline.addLabel("stage_9", 9)
.to(cards[4], {zIndex: -1, duration: 0.4}, "stage_9")
.to(cardsBlur[4], {duration: 0.4, opacity: 1}, "stage_9")
.to(cardsBlur[5], {duration: 0.4, opacity: 0}, "stage_9")

timeline.addLabel("stage_10", 10)
.to(cards[0], {x: 160, duration: duration}, "stage_10")
.to(cards[1], {x: 163, duration: duration}, "stage_10")
.to(cards[2], {x: 163, duration: duration}, "stage_10")
.to(cards[3], {x: 163, duration: duration}, "stage_10")
.to(cards[4], {x: 163, duration: duration}, "stage_10")
.to(cards[5], {x: -815, duration: duration}, "stage_10")











// .to(cards[0], {zIndex: -1, duration: 0.2}, 1)
// .to(cards[0], {x: 812, duration: duration}, 2)
// .to(cards[1], {x: -163, zIndex: duration, duration: 1}, 2)
// .to(cards[2], {x: -163, zIndex: duration, duration: 1}, 2)
// .to(cards[3], {x: -163, zIndex: duration, duration: 1}, 2)
// .to(cards[4], {x: -163, zIndex: duration, duration: 1}, 2)
// .to(cards[5], {x: -163, zIndex: duration, duration: 1}, 2)
// .to(cards[1], {zIndex: -1, duration: 0.2}, 3)
// .to(cards[0], {x: 649, duration: duration}, 4)
// .to(cards[1], {x: 652, duration: duration}, 4)
// .to(cards[2], {x: -326, duration: duration}, 4)
// .to(cards[3], {x: -326, duration: duration}, 4)
// .to(cards[4], {x: -326, duration: duration}, 4)
// .to(cards[5], {x: -326, duration: duration}, 4)
// .to(cards[2], {zIndex: -1, duration: 0.2}, 5)
// .to(cards[0], {x: 486, duration: duration}, 6)
// .to(cards[1], {x: 489, duration: duration}, 6)
// .to(cards[2], {x: 489, duration: duration}, 6)
// .to(cards[3], {x: -489, duration: duration}, 6)
// .to(cards[4], {x: -489, duration: duration}, 6)
// .to(cards[5], {x: -489, duration: duration}, 6)
// .to(cards[3], {zIndex: -1, duration: 0.2}, 7)
// .to(cards[0], {x: 323, duration: duration}, 8)
// .to(cards[1], {x: 326, duration: duration}, 8)
// .to(cards[2], {x: 326, duration: duration}, 8)
// .to(cards[3], {x: 326, duration: duration}, 8)
// .to(cards[4], {x: -652, duration: duration}, 8)
// .to(cards[5], {x: -652, duration: duration}, 8)
// .to(cards[4], {zIndex: -1, duration: 0.2}, 9)
// .to(cards[0], {x: 160, duration: duration}, 10)
// .to(cards[1], {x: 163, duration: duration}, 10)
// .to(cards[2], {x: 163, duration: duration}, 10)
// .to(cards[3], {x: 163, duration: duration}, 10)
// .to(cards[4], {x: 163, duration: duration}, 10)
// .to(cards[5], {x: -815, duration: duration}, 10)
