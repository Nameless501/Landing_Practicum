import "./index.css";
import FormValidator from "../components/FormValidator.js";
import {formFeedback} from '../utils/constants.js';
import { validationConfig } from "../utils/constants.js";
//валидация 1 формы
const validation = new FormValidator(
  validationConfig,
  formFeedback
);
validation.enableValidation();



