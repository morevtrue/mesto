export const profile = document.querySelector('.profile');
export const popupProfileButton = profile.querySelector('.profile__edit-button');
export const popupAddCardButton = profile.querySelector('.profile__add-button')
// ПОПАП ПРОФИЛЬ-----------------------------------------
export const popupEditProfile = document.querySelector('.popup_edit_profile');
export const nameInput = popupEditProfile.querySelector('.popup__text_input_name');
export const jobInput = popupEditProfile.querySelector('.popup__text_input_job');
// ПОПАП ДОБАВИТЬ КАРТОЧКУ---------------------------------
export const popupAddCard = document.querySelector('.popup_add_card');
export const namePlaceInput = popupAddCard.querySelector('.popup__text_input_place');
export const srcImageInput = popupAddCard.querySelector('.popup__text_input_src');

export const settingsValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__form-error_active',
};

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  }
];