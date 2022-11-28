export const validationConfig = {
  formSelector: ".form", //формы
  inputSelector: ".form__input", //поля ввода
  submitButtonSelector: ".form__btn", //кнопка сохранить
  inactiveButtonClass: "form__button_disabled", //неактивная кнопка сохранить
  inputErrorClass: "form__input_type_error", //поле ввода с ошибкой
  errorClass: "form__input_type_error-active", //span
};

export const formFeedback = document.querySelector(".feedback-form");
export const popupVideoSelector = '.popup_type_open-video';
export const popupBtn = document.querySelector(".contacts__btn");
export const closeBtn = document.querySelector(".popup__close");