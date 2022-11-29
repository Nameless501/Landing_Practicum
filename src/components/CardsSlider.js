export default function CardsSlider(nodeList, config) {
  const {
    sliderCardsContainerSelector,
    sliderCardActiveSelector,
    firstCardAnimationSelector,
    restCardsAnimationSelector,
    firstCardBackAnimationSelector,
    restCardsBackAnimationSelector,
    scrollToElementSelector,
  } = config;
  const cardsList = [...nodeList].reverse();
  const sliderCardsContainer = document.querySelector(sliderCardsContainerSelector);
  const scrollToElement = document.querySelector(scrollToElementSelector);
  let counter = 0;


function getDistanceToCards() {
  const containerProps = sliderCardsContainer.getBoundingClientRect();
  return containerProps.y;
}

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

  function handleCardsListRearrange() {
    if(cardsList[0].classList.contains(firstCardAnimationSelector)) {
      const firstCard = cardsList.shift();
      cardsList.push(firstCard);

      handleAnimationEnd(true);
    } else if(cardsList[0].classList.contains(restCardsBackAnimationSelector)) {
      const lastCard = cardsList.pop();
      cardsList.unshift(lastCard);

      handleAnimationEnd(false);
    }
  }

  function handleAnimationEnd(isForward) {
    cardsList.forEach((card) => {
      card.classList.remove(firstCardAnimationSelector);
      card.classList.remove(restCardsAnimationSelector);
      card.classList.remove(firstCardBackAnimationSelector);
      card.classList.remove(restCardsBackAnimationSelector);
    })

    renderCards(isForward);

    const isLastCard = (counter === 6 && isForward) ||
      (counter === 0 && !isForward);

    if(isLastCard) {
      window.removeEventListener('scroll', handlePageScrollStop);
      window.addEventListener('scroll', resetSliderListeners);
      document.body.style.overflow = '';
      counter = 0;
    } else {
      window.addEventListener('wheel', handleAnimationStart);
    }

    sliderCardsContainer.removeEventListener('animationend', handleAnimationEnd);
  }

  function handleAnimationStart(evt) {
    window.removeEventListener('wheel', handleAnimationStart);

    if(evt.deltaY > 0) {
      cardsList.forEach((card, index) => {
        if(index === 0) {
          card.classList.add(firstCardAnimationSelector);
        } else {
          card.classList.add(restCardsAnimationSelector);
        }
      });

      counter++;
    } else if(evt.deltaY < 0 && counter > 0) {
      cardsList.forEach((card, index) => {
        if(index === cardsList.length - 1) {
          card.classList.add(firstCardBackAnimationSelector);
        } else {
          card.classList.add(restCardsBackAnimationSelector);
        }
      });

      counter--
    } else {
      window.removeEventListener('scroll', handlePageScrollStop);
      window.addEventListener('scroll', resetSliderListeners);
      document.body.style.overflow = '';
    }

    sliderCardsContainer.addEventListener('animationend', handleCardsListRearrange);
  }

  function handlePageScrollStop() {
    const distance = getDistanceToCards();

    if(distance < 250 && distance > 200) {
      scrollToElement.scrollIntoView({ block: 'center' });
      document.body.style.overflow = 'hidden';
      window.addEventListener('wheel', handleAnimationStart);
    }
  }

  function setSliderListeners() {
    window.addEventListener('scroll', handlePageScrollStop);
  }

  function resetSliderListeners() {
    const distance = getDistanceToCards();

    if(distance > 600 || distance < -600) {
      setSliderListeners();
      window.removeEventListener('scroll', resetSliderListeners);
    }
  }

  return setSliderListeners;
}