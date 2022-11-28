import "./index.css";
import FormValidator from "../components/FormValidator.js";
import { validationConfig, vacanciesConfig, vacanciesFormElement, formFeedback } from "../utils/constants.js";
import { vacanciesData } from "../utils/vacancies.js";
import VacanciesRender from '../components/VacanciesRender.js';

// ------------- валидация формы

const validation = new FormValidator(
  validationConfig,
  formFeedback
);
validation.enableValidation();

// ------------- рендер списка вакансий

const handleVacanciesRender = VacanciesRender(vacanciesConfig, vacanciesData);

handleVacanciesRender();

vacanciesFormElement.addEventListener('input', handleVacanciesRender);