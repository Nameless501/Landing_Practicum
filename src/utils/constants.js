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

// --------------- render vacancies

export const vacanciesConfig = {
  templateSelector: '.vacancies__card-template',
  cardSelector: '.accordion__card',
  cardTitleSelector: '.accordion__card-header-title',
  cardDescriptionSelector: '.accordion__card-description-textarea',
  cardTextSelector: 'accordion__card-description-text',
  cardTextSizeSelector: 'text_regular',
  cardButtonSelector: 'accordion__card-header-button',
  cardExpandSelector: 'accordion__card-description',
  roleInputSelector: 'input[name="role"]:checked',
  courseInputSelector: 'input[name="course"]:checked',
  placeholderSelector: 'vacancies__empty',
  containerSelector: '.vacancies__cards',
  showMoreButtonSelector: 'vacancies__show-more-button',
}

export const vacanciesFormElement = document.querySelector('.vacancies__form');
