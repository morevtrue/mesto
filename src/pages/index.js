import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  popupProfileButton,
  popupAddCardButton,
  nameInput,
  jobInput,
  initialCards,
  settingsValidation,
} from '../utils/constants.js';
import './index.css';

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

// ПОПАП ПОСМОТРЕТЬ ФОТО
const popupWithImage = new PopupWithImage('.popup_open_image');

const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
  popupWithImage.setEventListeners();
};

// СОЗДАТЬ КАРТОЧКУ
const createCard = (item) => {
  const cardNew = new Card(item, '#card', handleCardClick);
  const cardElement = cardNew.generateCard();
  return cardElement;
};

// ЗАГРУЗКА ИЗНАЧАЛЬНЫХ КАРТОЧЕК
const cardsSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = createCard(item);
    cardsSection.addItem(cardElement);
  },
}, '.cards__list');

cardsSection.renderItems();

// ПОПАП ДОБАВИТЬ КАРТОЧКУ---------------------------
const handleFormAddCardSubmit = (inputValues) => {
  const cardData = {
    name: inputValues['popupInputPlace'],
    link: inputValues['popupInputSrc'],
  };
  cardsSection.addItemPrepend(createCard(cardData));
};

const popupFormCard = new PopupWithForm('.popup_add_card', handleFormAddCardSubmit);

const handleClickPopupAddCard = () => {
  popupFormCard.open();
  popupFormCard.setEventListeners();
  formValidators['formCard'].resetValidation();
};

popupAddCardButton.addEventListener('click', handleClickPopupAddCard);

// ПОПАП ПРОФИЛЬ-------------------------------------
const profileInfo = new UserInfo({
  profileNameSelector: '.profile__title',
  profileJobSelector: '.profile__subtitle',
});

const handleFormProfileSubmit = (inputValues) => {
  profileInfo.setUserInfo({
    name: inputValues['popupInputName'],
    job: inputValues['popupInputJob'],
  })
};

const popupFormProfile = new PopupWithForm('.popup_edit_profile', handleFormProfileSubmit);

const handleClickPopupProfile = () => {
  popupFormProfile.open();
  popupFormProfile.setEventListeners();
  const { profileName: name, profileJob: job } = profileInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = job;
  formValidators['formProfile'].resetValidation();
};

popupProfileButton.addEventListener('click', handleClickPopupProfile);
