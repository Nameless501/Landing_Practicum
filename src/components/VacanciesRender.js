export default function VacanciesRender(vacanciesConfig, vacanciesData) {
  const { containerSelector, showMoreButtonSelector, placeholderSelector } = vacanciesConfig;
  const containerElement = document.querySelector(containerSelector);
  const showMoreButton = document.querySelector(`.${showMoreButtonSelector}`);

  function createVacancyCard(data) {
    const {
      templateSelector,
      cardSelector,
      cardTitleSelector,
      cardDescriptionSelector,
      cardButtonSelector,
      cardTextSelector,
      cardTextSizeSelector,
      cardExpandSelector
    } = vacanciesConfig

    function getTemplate() {
      const cardTemplate = document.querySelector(templateSelector).content.querySelector(cardSelector).cloneNode(true);
      return cardTemplate;
    }

    function setListeners(card) {
      const button = card.querySelector(`.${cardButtonSelector}`);
      const expandCard = card.querySelector(`.${cardExpandSelector}`);

      button.addEventListener('click', () => {
        button.classList.toggle(`${cardButtonSelector}_active`);
        expandCard.classList.toggle(`${cardExpandSelector}_visible`);
      })
    }

    function createParagraph(string) {
      const textNode = document.createElement('p');
      textNode.classList.add(cardTextSelector, cardTextSizeSelector);
      textNode.textContent = string;

      return textNode;
    }

    const currentCard = getTemplate();
    const title = currentCard.querySelector(cardTitleSelector);
    const description = currentCard.querySelector(cardDescriptionSelector);

    setListeners(currentCard);

    title.textContent = data.name;
    data.description.forEach((paragraph) => {
      description.append(createParagraph(paragraph));
    });

    return currentCard;
  }

  function getVacanciesData() {
    const { roleInputSelector, courseInputSelector } = vacanciesConfig;

    const role = document.querySelector(roleInputSelector).value;
    const course = document.querySelector(courseInputSelector).value;

    return vacanciesData[course][role];
  }

  function toggleSelectorVisibility(selector, visible) {
    const element = document.querySelector(`.${selector}`);

    if(visible) {
      element.classList.add(`${selector}_visible`);
    } else {
      element.classList.remove(`${selector}_visible`);
    }
  }

  const toggleShowMoreButton = toggleSelectorVisibility.bind(null, showMoreButtonSelector);

  const togglePlaceholderVisibility = toggleSelectorVisibility.bind(null, placeholderSelector);

  function vacancyRenderer(vacancy) {
    const vacancyCard = createVacancyCard(vacancy)
    containerElement.append(vacancyCard);
  }

  function showNextVacancies(vacanciesList, handler) {
    const vacancies = [...vacanciesList];

    function showNext() {
      if(vacancies.length > 0) {
        vacancies.splice(0, 4).forEach((vacancy) => {
          vacancyRenderer(vacancy);
        });
        if(vacancies.length === 0) {
          showMoreButton.removeEventListener('click', handler);
          toggleShowMoreButton(false);
        }
      }
    }

    showNext();
    return showNext;
  }

  function clearVacancies() {
    containerElement.innerHTML = '';
    toggleShowMoreButton(false);
    togglePlaceholderVisibility(false);
  }

  return function() {
    const currentVacancies = getVacanciesData(vacanciesConfig);
    clearVacancies();

    if(currentVacancies.length > 4) {
      toggleShowMoreButton(true);
      const handleClick = showNextVacancies(currentVacancies, handleClick);
      showMoreButton.addEventListener('click', handleClick);
    } else if(currentVacancies.length === 0) {
      togglePlaceholderVisibility(true);
    } else {
      currentVacancies.forEach((vacancy) => {
        vacancyRenderer(vacancy);
      });
    }
  }
}