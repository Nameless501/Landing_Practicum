export default function CardsSlider(nodeList, config) {
  const {
    sliderCardsContainerSelector,
    sliderCardActiveSelector,
    firstCardAnimationSelector,
    restCardsAnimationSelector,
  } = config;
  const cardsList = [...nodeList].reverse();
  const sliderCardsContainer = document.querySelector(sliderCardsContainerSelector);

  // let counter;

  function renderCards() {
    cardsList.forEach((card, index) => {
      if(index === 0) {
        card.classList.add(sliderCardActiveSelector);
      } else {
        card.classList.remove(sliderCardActiveSelector);
      }
      card.style.zIndex = index * -1;
      card.parentNode.style.order = cardsList.length - index;
    });
  }

  function handleAnimationEnd() {
    cardsList.forEach((card) => {
      card.classList.remove(firstCardAnimationSelector);
      card.classList.remove(restCardsAnimationSelector);
    })

    const firstCard = cardsList.shift()
    cardsList.push(firstCard);

    renderCards();

    sliderCardsContainer.addEventListener('click', handleAnimationStart)
    sliderCardsContainer.removeEventListener('animationend', handleAnimationEnd);
  }

  function handleAnimationStart() {
    cardsList.forEach((card, index) => {
      if(index === 0) {
        card.classList.add(firstCardAnimationSelector);
      } else {
        card.classList.add(restCardsAnimationSelector);
      }
    });

    sliderCardsContainer.addEventListener('animationend', handleAnimationEnd);
    sliderCardsContainer.removeEventListener('click', handleAnimationStart);
  }

  function setSliderListeners() {
    sliderCardsContainer.addEventListener('click', handleAnimationStart);
  }

  return setSliderListeners;
}