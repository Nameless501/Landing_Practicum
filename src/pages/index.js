import "./index.css";
import FormValidator from "../components/FormValidator.js";
import { formFeedback, popupBtn, popup, closeBtn } from "../utils/constants.js";
import { validationConfig } from "../utils/constants.js";
// ------------- валидация формы

const validation = new FormValidator(validationConfig, formFeedback);
validation.enableValidation();

popupBtn.addEventListener("click", function () {
  popup.classList.add("popup_opened");
});
closeBtn.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});
