import { FormValidator, settingsValidation } from './FormValidator.js';
import { Card } from './Card.js';

const profile = document.querySelector('.profile');
const popupProfileButton = profile.querySelector('.profile__edit-button');
const popupAddCardButton = profile.querySelector('.profile__add-button')
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
export const cardsList = document.querySelector('.cards__list');
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
export const popupViewPhoto = document.querySelector('.popup_open_image');
export const popupImageText = popupViewPhoto.querySelector('.popup__image-text');
export const popupImage = popupViewPhoto.querySelector('.popup__image');

// ОТКРЫТЬ ПОПАП---------------------------------------
export const openPopup = (currentPopup) => {
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
const enableFormValidator = (popup) => {
  const formValidator = new FormValidator(settingsValidation, popup);
  formValidator.enableValidation();
  formValidator.toggleButtonState();
  return formValidator;
};

// ПОПАП ПРОФИЛЬ-------------------------------------
const handleClickPopupProfile = () => {
  openPopup(popupEditProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  enableFormValidator('.popup_edit_profile');
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
  enableFormValidator('.popup_add_card');
};

popupAddCardButton.addEventListener('click', handleClickPopupAddCard);

export const handleFormAddCardSubmit = (evt) => {
  evt.preventDefault();
  const cardData = {
    name: namePlaceInput.value,
    link: srcImageInput.value
  };
  const cardNew = new Card(cardData, '#card');
  const cardElement = cardNew.generateCard();

  cardsList.prepend(cardElement);
  evt.target.reset();
  closePopup(popupAddCard);
};

formElementCard.addEventListener('submit', handleFormAddCardSubmit);
