// --------------- feedback form validation

export const validationConfig = {
  formSelector: ".form", //формы
  inputSelector: ".form__input", //поля ввода
  submitButtonSelector: ".form__btn", //кнопка сохранить
  inactiveButtonClass: "form__button_disabled", //неактивная кнопка сохранить
  inputErrorClass: "form__input_type_error", //поле ввода с ошибкой
  errorClass: "form__input_type_error-active", //span
};

export const formFeedback = document.querySelector(".feedback-form");

// ---------------  popup

export const popupVideoSelector = '.popup_type_open-video';
export const popupBtn = document.querySelector(".contacts__btn");
export const closeBtn = document.querySelector(".popup__close");

// --------------- faq and accordion selectors

export const faqCardsList = document.querySelectorAll('.accordion__card-header_place_faq');

export const accordionArrowButtonSelector = 'accordion__card-header-button';

export const accordionExpandSelector = 'accordion__card-description';

// --------------- render vacancies

export const vacanciesConfig = {
  templateSelector: '.vacancies__card-template',
  cardSelector: '.accordion__card',
  cardTitleSelector: '.accordion__card-header-title',
  cardDescriptionSelector: '.accordion__card-description-textarea',
  cardTextSelector: 'accordion__card-description-text',
  cardTextSizeSelector: 'text_regular',
  cardButtonSelector: accordionArrowButtonSelector,
  cardExpandSelector: accordionExpandSelector,
  roleInputSelector: 'input[name="role"]:checked',
  courseInputSelector: 'input[name="course"]:checked',
  placeholderSelector: 'vacancies__empty',
  containerSelector: '.vacancies__cards',
  cardHeaderSelector: '.accordion__card-header',
  showMoreButtonSelector: 'main-button_place_show-more',
};

export const vacanciesFormElement = document.querySelector('.vacancies__form');

// --------------- cards slider

export const sliderCardsNodeList = document.querySelectorAll('.cards-slider__card')

export const cardsSliderConfig = {
  sliderCardsContainerSelector: '.cards-slider__cards',
  sliderCardActiveSelector: 'cards-slider__card_active',
  firstCardAnimationSelector: 'cards-slider__animation_card_first',
  restCardsAnimationSelector: 'cards-slider__animation_card_rest',
  firstCardBackAnimationSelector: 'cards-slider__animation_card_first-backward',
  restCardsBackAnimationSelector: 'cards-slider__animation_card_rest-backward',
  scrollToElementSelector: '.cards-slider',
};