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
const popupProfileInputList = popupEditProfile.querySelectorAll('.popup__form-input');
const popupProfileSubmitButton = popupEditProfile.querySelector('.popup__submit-button');
// ПОПАП ДОБАВИТЬ КАРТОЧКУ---------------------------------
const popupAddCard = document.querySelector('.popup_add_card');
const namePlaceInput = popupAddCard.querySelector('.popup__text_input_place');
const srcImageInput = popupAddCard.querySelector('.popup__text_input_src');
const formElementCard = popupAddCard.querySelector('.popup__form');
const popupCardInputList = popupAddCard.querySelectorAll('.popup__form-input');
const popupCardSubmitButton = popupAddCard.querySelector('.popup__submit-button');
// ПОПАП ПОСМОТРЕТЬ ФОТОГРАФИЮ------------------------------
const popupViewPhoto = document.querySelector('.popup_open_image');
const popupImageText = popupViewPhoto.querySelector('.popup__image-text');
const popupImage = popupViewPhoto.querySelector('.popup__image');
//РАБОТА С ЭЛЕМЕНТОМ TEMPLATE--------------------------------
const cardTemplate = document.querySelector('#card').content;
const cardElement = cardTemplate.querySelector('.card');

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

// ЛАЙКНУТЬ КАРТОЧКУ----------------------------------
const handleLikeCard = (evt) => {
  evt.target.classList.toggle('card__like_active');
};

// УДАЛИТЬ КАРТОЧКУ-----------------------------------
const handleDeleteCard = (evt) => {
  evt.target.closest('.card').remove();
};

// СОЗДАТЬ КАРТОЧКУ-----------------------------------
const createCard = (link, name) => {
  const clonedElement = cardElement.cloneNode(true);
  const cardImage = clonedElement.querySelector('.card__image');
  clonedElement.querySelector('.card__like').addEventListener('click', handleLikeCard);
  clonedElement.querySelector('.card__delete-button').addEventListener('click', handleDeleteCard);
  cardImage.src = link;
  cardImage.alt = name;
  clonedElement.querySelector('.card__text').textContent = name;
  cardImage.addEventListener('click', () => {
    handleClickPopupPhoto(link, name);
  });
  return clonedElement;
};

// ПОПАП ПОСМОТРЕТЬ ФОТО------------------------------
const handleClickPopupPhoto = (link, name) => {
  openPopup(popupViewPhoto);
  popupImage.src = link;
  popupImageText.textContent = name;
  popupImage.alt = popupImageText.textContent;
};

// ЗАГРУЗКА ГАЛЕРЕИ ФОТОГРАФИЙ НА СТРАНИЦУ------------
const generateCards = (card) => {
  cardsList.append(createCard(card.link, card.name));
};

initialCards.forEach(generateCards);

// ПОПАП ПРОФИЛЬ-------------------------------------
const handleClickPopupProfile = () => {
  openPopup(popupEditProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  toggleButtonState(popupProfileInputList, popupProfileSubmitButton, settingsValidation);
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
  toggleButtonState(popupCardInputList, popupCardSubmitButton, settingsValidation);
};

popupAddCardButton.addEventListener('click', handleClickPopupAddCard);

const handleFormAddCardSubmit = (evt) => {
  evt.preventDefault();
  cardsList.prepend(createCard(srcImageInput.value, namePlaceInput.value));
  evt.target.reset();
  closePopup(popupAddCard);
};

formElementCard.addEventListener('submit', handleFormAddCardSubmit);
