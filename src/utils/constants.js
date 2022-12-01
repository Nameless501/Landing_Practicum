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
export const formBig = document.querySelector(".big_form");

// ---------------  popup

export const popupVideoSelector = ".popup_type_open-video";
export const popupBtn = document.querySelector(".main-button");
export const closeBtn = document.querySelector(".popup__close");


// --------------- faq and accordion selectors

export const faqCardsList = document.querySelectorAll(
  ".accordion__card-header_place_faq"
);

export const accordionArrowButtonSelector = "accordion__card-header-button";

export const accordionExpandSelector = "accordion__card-description";

// --------------- render vacancies

export const vacanciesConfig = {
  templateSelector: '.vacancies__card-template',
  cardSelector: '.accordion__card_type_',
  cardTitleSelector: '.accordion__card-header-title',
  listItemTemplateSelector: '.accordion__card-description-template',
  requirementsListItemSelector: '.accordion__card-description-requirement',
  requirementsListSelector: '.accordion__card-description-requirements-list',
  salarySelector: '.accordion__card-description-salary-amount',
  courseLengthSelector: '.accordion__card-description-length',
  textInsertSelector: '.accordion__card-description-inserted-text',
  cardButtonSelector: accordionArrowButtonSelector,
  cardExpandSelector: accordionExpandSelector,
  roleInputSelector: 'input[name="role"]:checked',
  courseInputSelector: 'input[name="course"]:checked',
  placeholderSelector: "vacancies__empty",
  containerSelector: ".vacancies__cards",
  cardHeaderSelector: ".accordion__card-header",
  showMoreButtonSelector: "main-button_place_show-more",
};

export const vacanciesFormElement = document.querySelector(".vacancies__form");

// --------------- cards slider

const stage_1 = [812, -163, -163, -163, -163, -163];

const stage_2 = [649, 652, -326, -326, -326, -326];

const stage_3 = [486, 489, 489, -489, -489, -489];

const stage_4 = [323, 326, 326, 326, -652, -652];

const stage_5 = [163, 163, 163, 163, 161, -813];

export const cardsSliderProps = {
  stages: [stage_1, stage_2, stage_3, stage_4, stage_5],
  cardSelector: '.cards-slider__card_',
  blurSelector: '.cards-slider__card-blur_card_',
  triggerSelector: '.cards-slider__cards',
  duration: { x: 1, z: 0.4 },
  stagesCount: 5,
}

// --------------- header

export const headerElement = document.querySelector('.header');
