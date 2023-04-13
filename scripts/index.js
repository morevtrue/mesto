import { FormValidator, settingsValidation } from './FormValidator.js';
import { Card, initialCards } from './Card.js';
import Section from './Section.js';

const profile = document.querySelector('.profile');
const popupProfileButton = profile.querySelector('.profile__edit-button');
const popupAddCardButton = profile.querySelector('.profile__add-button')
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const cardsList = document.querySelector('.cards__list');
const popupList = document.querySelectorAll('.popup');
// ПОПАП ПРОФИЛЬ-----------------------------------------
const popupEditProfile = document.querySelector('.popup_edit_profile');
const formElementProfile = popupEditProfile.querySelector('.popup__form');
const nameInput = popupEditProfile.querySelector('.popup__text_input_name');
const jobInput = popupEditProfile.querySelector('.popup__text_input_job');
// ПОПАП ДОБАВИТЬ КАРТОЧКУ---------------------------------
const popupAddCard = document.querySelector('.popup_add_card');
const namePlaceInput = popupAddCard.querySelector('.popup__text_input_place');
const srcImageInput = popupAddCard.querySelector('.popup__text_input_src');
const formElementCard = popupAddCard.querySelector('.popup__form');
// ПОПАП ПОСМОТРЕТЬ ФОТОГРАФИЮ------------------------------
const popupViewPhoto = document.querySelector('.popup_open_image');
const popupImageText = popupViewPhoto.querySelector('.popup__image-text');
const popupImage = popupViewPhoto.querySelector('.popup__image');

// ОТКРЫТЬ ПОПАП---------------------------------------
const openPopup = (currentPopup) => {
  currentPopup.classList.add('popup_opened');
  document.addEventListener('keydown', processEscape);
};

// ЗАКРЫТЬ ПОПАП---------------------------------------
const closePopup = (currentPopup) => {
    currentPopup.classList.remove('popup_opened');  
    document.removeEventListener('keydown', processEscape);
};

// ----закрыть кликом на оверлей----
const handleClickOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  };
};

// ----закрыть нажатием на кнопку Esc----
const processEscape = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};

// ----закрыть попап нажатием на кнопку закрытия или кликом в оверлей----
popupList.forEach(popup => {
  const popupCloseButton = popup.querySelector('.popup__close-button');
  popupCloseButton.addEventListener('click', () => {
    closePopup(popup);
  });
  popup.addEventListener('click', (evt) => {
    handleClickOverlay(evt);
  });
});

// ВАЛИДАЦИЯ----------------------------------------
const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  })
};

enableValidation(settingsValidation);

// ПОПАП ПРОФИЛЬ-------------------------------------
const handleClickPopupProfile = () => {
  openPopup(popupEditProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  formValidators['formProfile'].resetValidation();
};

popupProfileButton.addEventListener('click', handleClickPopupProfile);

const handleFormProfileSubmit = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupEditProfile);
};

formElementProfile.addEventListener('submit', handleFormProfileSubmit);

// ПОПАП ДОБАВИТЬ КАРТОЧКУ---------------------------
const handleClickPopupAddCard = () => {
  openPopup(popupAddCard);
  namePlaceInput.value = '';
  srcImageInput.value = '';
  formValidators['formCard'].resetValidation();
};

popupAddCardButton.addEventListener('click', handleClickPopupAddCard);

const handleFormAddCardSubmit = (evt) => {
  evt.preventDefault();
  const cardData = {
    name: namePlaceInput.value,
    link: srcImageInput.value
  };
  cardsList.prepend(createCard(cardData));
  evt.target.reset();
  closePopup(popupAddCard);
};

formElementCard.addEventListener('submit', handleFormAddCardSubmit);

// ПОПАП ПОСМОТРЕТЬ ФОТО
const handleCardClick = (name, link) => {
  openPopup(popupViewPhoto);
  popupImage.src = link;
  popupImage.alt = link;
  popupImageText.textContent = name;
};

// СОЗДАТЬ КАРТОЧКУ
const createCard = (item) => {
  const cardNew = new Card(item, '#card', handleCardClick);
  const cardElement = cardNew.generateCard();
  return cardElement;
};

// initialCards.forEach(card => {
//   cardsList.append(createCard(card));
// });


// ЗАГРУЗКА ИЗНАЧАЛЬНЫХ КАРТОЧЕК
const cardsSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    cardsSection.addItem(cardElement);
  },
}, '.cards__list');

cardsSection.renderItems();
