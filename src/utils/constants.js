export const profile = document.querySelector('.profile');
export const popupProfileButton = profile.querySelector('.profile__edit-button');
export const popupAddCardButton = profile.querySelector('.profile__add-button')
// ПОПАП ПРОФИЛЬ-----------------------------------------
export const popupEditProfile = document.querySelector('.popup_edit_profile');
export const nameInput = popupEditProfile.querySelector('.popup__text_input_name');
export const jobInput = popupEditProfile.querySelector('.popup__text_input_job');
// ПОПАП ДОБАВИТЬ КАРТОЧКУ---------------------------------
export const popupAddCard = profile.querySelector('.popup_add_card');
// ПОПАП ИЗМЕНИТЬ АВАТАР-----------------------------------
export const popupAvatarButton = document.querySelector('.profile__avatar-button');
export const popupInputAvatar = document.querySelector('.popup__text_input_avatar');

export const settingsValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__form-error_active',
};
