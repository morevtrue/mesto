const profile = document.querySelector('.profile');
const openPopupProfile = profile.querySelector('.profile__edit-button');
const openPopupAddCard = profile.querySelector('.profile__add-button')
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
const cardsList = document.querySelector('.cards__list');
const cardLike = document.querySelectorAll('.card__like');
// ПОПАП ПРОФИЛЬ-----------------------------------------
const popupEditProfile = document.querySelector('.popup_edit_profile');
const closePopupButtonProfile = popupEditProfile.querySelector('.popup__close-button');
const formElementProfile = popupEditProfile.querySelector('.popup__form');
const nameInput = popupEditProfile.querySelector('.popup__text_input_name');
const jobInput = popupEditProfile.querySelector('.popup__text_input_job');
// ПОПАП ДОБАВИТЬ КАРТОЧКУ---------------------------------
const popupAddCard = document.querySelector('.popup_add_card');
const closePopupButtonAddCard = popupAddCard.querySelector('.popup__close-button');
const namePlaceInput = popupAddCard.querySelector('.popup__text_input_place');
const srcImageInput = popupAddCard.querySelector('.popup__text_input_src');
const formElementCard = popupAddCard.querySelector('.popup__form');
// ПОПАП ПОСМОТРЕТЬ ФОТОГРАФИЮ------------------------------
const popupViewPhoto = document.querySelector('.popup_open_image');
const popupImageText = popupViewPhoto.querySelector('.popup__image-text');
const popupImage = popupViewPhoto.querySelector('.popup__image');
const closePopupButtonViewPhoto = popupViewPhoto.querySelector('.popup__close-button');
//РАБОТА С ЭЛЕМЕНТОМ TEMPLATE--------------------------------
const cardTemplate = document.querySelector('#card').content;

//МАССИВ ИЗНАЧАЛЬНЫХ ФОТОГРАФИЙ
const initialCards = [
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

// СОБЫТИЕ ОБРАБОТКИ КЛИКА ОТКРЫТИЯ ПОПАПА
function openPopupEvent(currentButton, currentClick) {
  currentButton.addEventListener('click', currentClick);
};

// ОТКРЫТЬ ПОПАП---------------------------------------
function openPopup(currentPopup) {
  currentPopup.classList.add('popup_opened');
};

// ЗАКРЫТЬ ПОПАП---------------------------------------
function closePopup(closePopupButton) {
  closePopupButton.addEventListener('click', clickPopupClose);
};

function clickPopupClose(evt) {
  evt.target.closest('.popup').classList.remove('popup_opened');
};

// ЛАЙКНУТЬ КАРТОЧКУ----------------------------------
function likeButton(currentElement) {
  const cardLike = currentElement.querySelector('.card__like');
  cardLike.addEventListener('click', clickLikeButton);
};

function clickLikeButton(evt) {
  evt.target.classList.toggle('card__like_active');
};

// УДАЛИТЬ КАРТОЧКУ-----------------------------------
const clickDeleteButton = (evt) => {
  evt.target.closest('.card').remove();
};

function deleteButton(currentElement) {
  const deleteButton = currentElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', clickDeleteButton);
};

// ПОПАП ПОСМОТРЕТЬ ФОТО------------------------------
const clickPopupPhoto = (evt) => {
  openPopup(popupViewPhoto);
  popupImage.src = evt.target.src;
  popupImageText.textContent = evt.target.closest('.card').textContent;
};

function openPopupViewPhoto(currentElement) {
  const cardImage = currentElement.querySelector('.card__image');
  openPopupEvent(cardImage, clickPopupPhoto);
};

closePopup(closePopupButtonViewPhoto);

// ЗАГРУЗКА ГАЛЕРЕИ ФОТОГРАФИЙ НА СТРАНИЦУ------------
const generateCard = (card) => {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  likeButton(cardElement);
  deleteButton(cardElement);
  openPopupViewPhoto(cardElement);
  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__text').textContent = card.name;
  cardsList.append(cardElement);
};

initialCards.forEach(generateCard);

// ПОПАП ПРОФИЛЬ-------------------------------------
const clickPopupProfile = () => {
  openPopup(popupEditProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
};

openPopupEvent(openPopupProfile, clickPopupProfile);

const submitFormProfile = (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  popupEditProfile.classList.remove('popup_opened');
};

formElementProfile.addEventListener('submit', submitFormProfile);

// openPopupProfile.addEventListener('click', clickPopupProfile);

closePopup(closePopupButtonProfile);

// ПОПАП ДОБАВИТЬ КАРТОЧКУ---------------------------
const clickPopupAddCard = () => {
  openPopup(popupAddCard);
};

openPopupEvent(openPopupAddCard, clickPopupAddCard);

// openPopupAddCard.addEventListener('click', clickPopupAddCard);

formElementCard.addEventListener('submit', submitFormAddCard);

function submitFormAddCard(evt) {
  evt.preventDefault();
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  likeButton(cardElement);
  deleteButton(cardElement);
  openPopupViewPhoto(cardElement);
  cardElement.querySelector('.card__text').textContent = namePlaceInput.value;
  cardElement.querySelector('.card__image').src = srcImageInput.value;
  cardsList.prepend(cardElement);
  popupAddCard.classList.remove('popup_opened');
  namePlaceInput.value = '';
  srcImageInput.value = '';
};

closePopup(closePopupButtonAddCard);
