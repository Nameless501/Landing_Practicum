import "./index.css";
import FormValidator from "../components/FormValidator.js";
import {formFeedback} from '../utils/constants.js';
import { validationConfig } from "../utils/constants.js";

// ------------- валидация формы

const validation = new FormValidator(
  validationConfig,
  formFeedback
);
validation.enableValidation();

// // ------------- test type: scroll

// const infoCardsListScroll = [...document.querySelectorAll('.scroll-card')].reverse();
// const nextCardButtonScroll = document.querySelector('.test-button-2');

// function switchCardScroll(cardList) {
//   let index = 0;
//   let buttonPosition = 0;

//   // if(pageYOffset > 1550) {
//   //   document.body.style.overflow = 'hidden';
//   // }

//   return function() {
//     const currentCard = cardList[index];
//     const nextCard = cardList[index + 1];

//     if(index < cardList.length - 1) {
//       currentCard.classList.remove('info__card_active');
//       nextCard.classList.add('info__card_active');
//       index = index + 1;
//       buttonPosition += 203;

//       if(index === cardList.length - 1) {
//         nextCardButtonScroll.style.display = 'none';
//       } else {
//         nextCardButtonScroll.style.transform = `translate(${buttonPosition}px)`;
//       }
//     }
//   }
// }

// const handleCardScroll = switchCardScroll(infoCardsListScroll);

// let counter = 0;

// function stopsScroll() {
//   const last = infoCardsListScroll[infoCardsListScroll.length - 1];

//   if(last.classList.contains('info__card_active')) {
//     document.body.style.overflow = '';
//     window.removeEventListener('mousewheel', stopsScroll);
//   } else if(pageYOffset > 1550) {
//     document.body.style.overflow = 'hidden';
//     console.log(counter);
//     counter = counter + 1;
//     if(counter === 20) {
//       handleCardScroll();
//       counter = 0;
//     }
//   }
// }

// window.addEventListener('mousewheel', stopsScroll);