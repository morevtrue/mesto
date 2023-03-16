const profile = document.querySelector('.profile');
const popupProfileButton = profile.querySelector('.profile__edit-button');
const popupAddCardButton = profile.querySelector('.profile__add-button')
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const cardsList = document.querySelector('.cards__list');
// ПОПАП ПРОФИЛЬ-----------------------------------------
const popupEditProfile = document.querySelector('.popup_edit_profile');
const formElementProfile = popupEditProfile.querySelector('.popup__form');
const nameInput = popupEditProfile.querySelector('.popup__text_input_name');
const jobInput = popupEditProfile.querySelector('.popup__text_input_job');
const buttonClosePopupProfile = popupEditProfile.querySelector('.popup__close-button');
const popupProfileInputList = popupEditProfile.querySelectorAll('.popup__form-input');
const popupProfileSubmitButton = popupEditProfile.querySelector('.popup__submit-button');
// ПОПАП ДОБАВИТЬ КАРТОЧКУ---------------------------------
const popupAddCard = document.querySelector('.popup_add_card');
const namePlaceInput = popupAddCard.querySelector('.popup__text_input_place');
const srcImageInput = popupAddCard.querySelector('.popup__text_input_src');
const formElementCard = popupAddCard.querySelector('.popup__form');
const buttonClosePopupCard = popupAddCard.querySelector('.popup__close-button');
const popupCardInputList = popupAddCard.querySelectorAll('.popup__form-input');
const popupCardSubmitButton = popupAddCard.querySelector('.popup__submit-button');
// ПОПАП ПОСМОТРЕТЬ ФОТОГРАФИЮ------------------------------
const popupViewPhoto = document.querySelector('.popup_open_image');
const popupImageText = popupViewPhoto.querySelector('.popup__image-text');
const popupImage = popupViewPhoto.querySelector('.popup__image');
const buttonClosePopupPhoto = popupViewPhoto.querySelector('.popup__close-button')
//РАБОТА С ЭЛЕМЕНТОМ TEMPLATE--------------------------------
const cardTemplate = document.querySelector('#card').content;

// СОБЫТИЕ ОБРАБОТКИ КЛИКА ОТКРЫТИЯ ПОПАПА
function openPopupEvent(currentButton, currentClick) {
  currentButton.addEventListener('click', currentClick);
};

// ОТКРЫТЬ ПОПАП---------------------------------------
function openPopup(currentPopup) {
  currentPopup.classList.add('popup_opened');
  document.addEventListener('keydown', processEscape);
};

// ЗАКРЫТЬ ПОПАП---------------------------------------
function closePopup(evt) {
  if (evt.target === evt.currentTarget) {
    evt.currentTarget.closest('.popup').classList.remove('popup_opened');
    document.removeEventListener('keydown', processEscape);
  }
};

// ----закрыть нажатием на кнопку Esc----
const processEscape = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    popupOpened.classList.remove('popup_opened');
  };
};

// ЛАЙКНУТЬ КАРТОЧКУ----------------------------------
function handleLikeButton(evt) {
  evt.target.classList.toggle('card__like_active');
};

// УДАЛИТЬ КАРТОЧКУ-----------------------------------
const handleDeleteCard = (evt) => {
  evt.target.closest('.card').remove();
};

// СОЗДАТЬ КАРТОЧКУ-----------------------------------
function createCard(link, name) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__like').addEventListener('click', handleLikeButton);
  cardElement.querySelector('.card__delete-button').addEventListener('click', handleDeleteCard);
  openPopupViewPhoto(cardElement);
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = name;
  cardElement.querySelector('.card__text').textContent = name;
  return cardElement;
};

// ПОПАП ПОСМОТРЕТЬ ФОТО------------------------------
const clickPopupPhoto = (evt) => {
  openPopup(popupViewPhoto);
  popupImage.src = evt.target.src;
  popupImageText.textContent = evt.target.closest('.card').querySelector('.card__text').textContent;
  popupImage.alt = popupImageText.textContent;
  buttonClosePopupPhoto.addEventListener('click', closePopup);
  popupViewPhoto.addEventListener('click', closePopup);
};

function openPopupViewPhoto(currentElement) {
  const cardImage = currentElement.querySelector('.card__image');
  openPopupEvent(cardImage, clickPopupPhoto);
};

// ЗАГРУЗКА ГАЛЕРЕИ ФОТОГРАФИЙ НА СТРАНИЦУ------------
const generateCards = (card) => {
  cardsList.append(createCard(card.link, card.name));
};

initialCards.forEach(generateCards);

// ПОПАП ПРОФИЛЬ-------------------------------------
const clickPopupProfile = () => {
  openPopup(popupEditProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  buttonClosePopupProfile.addEventListener('click', closePopup);
  popupEditProfile.addEventListener('click', closePopup);
  toggleButtonState(popupProfileInputList, popupProfileSubmitButton, settingsValidation);
};

openPopupEvent(popupProfileButton, clickPopupProfile);

const submitFormProfile = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(evt);
};

formElementProfile.addEventListener('submit', submitFormProfile);

// ПОПАП ДОБАВИТЬ КАРТОЧКУ---------------------------
const clickPopupAddCard = () => {
  openPopup(popupAddCard);
  namePlaceInput.value = '';
  srcImageInput.value = '';
  buttonClosePopupCard.addEventListener('click', closePopup);
  popupAddCard.addEventListener('click', closePopup);
  toggleButtonState(popupCardInputList, popupCardSubmitButton, settingsValidation);
};

openPopupEvent(popupAddCardButton, clickPopupAddCard);

formElementCard.addEventListener('submit', submitFormAddCard);

function submitFormAddCard(evt) {
  evt.preventDefault();
  cardsList.prepend(createCard(srcImageInput.value, namePlaceInput.value));
  evt.target.reset();
  closePopup(evt);
};
