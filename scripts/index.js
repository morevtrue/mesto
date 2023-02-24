const profile = document.querySelector('.profile');
const openPopupProfile = profile.querySelector('.profile__edit-button');
const openPopupAddCard = profile.querySelector('.profile__add-button')
const profileTitle = profile.querySelector('.profile__title');
const profileSubtitle = profile.querySelector('.profile__subtitle');
// ПОПАП ПРОФИЛЬ
const popupEditProfile = document.querySelector('.popup_edit_profile');
const closePopupButtonProfile = popupEditProfile.querySelector('.popup__close-button');
const formElementProfile = popupEditProfile.querySelector('.popup__form');
const nameInput = popupEditProfile.querySelector('.popup__text_input_name');
const jobInput = popupEditProfile.querySelector('.popup__text_input_job');
// ПОПАП ДОБАВИТЬ КАРТОЧКУ
const popupAddCard = document.querySelector('.popup_add_card');
const closePopupButtonAddCard = popupAddCard.querySelector('.popup__close-button');
const namePlaceInput = popupAddCard.querySelector('.popup__text_input_name');
const srcImageInput = popupAddCard.querySelector('.popup__text_input_job');
const formElementCard = popupAddCard.querySelector('.popup__form');

const cardTemplate = document.querySelector('#card').content;
const cardsList = document.querySelector('.cards__list');
// const cardName = cardTemplate.querySelector('.card__text');
// const cardImage = cardTemplate.querySelector('.card__image');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alternative: 'Фотография гор Архыза'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alternative: 'Фотография заснеженного озера в Челябинской области'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alternative: 'Фотография девятиэтажных домов в Иваново'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alternative: 'Фотография горы на Камчатке'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alternative: 'Фотография железной дороги посреди леса'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alternative: 'Фотография утёса на Байкале'
  }
];

// ЗАГРУЗКА ГАЛЕРЕИ ФОТОГРАФИЙ НА СТРАНИЦУ

const galleryCard = initialCards.forEach(card => {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__image').alt = card.alternative;
  cardElement.querySelector('.card__text').textContent = card.name;
  cardsList.append(cardElement);
});

// ПОПАП ПРОФИЛЬ

openPopupProfile.addEventListener('click', () => {
  popupEditProfile.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  // popup.style.display = 'flex';
});

closePopupButtonProfile.addEventListener('click', () => {
  popupEditProfile.classList.remove('popup_opened');
  // popup.style.display = 'none';
});

formElementProfile.addEventListener('submit', evt => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  popupEditProfile.classList.remove('popup_opened');
  // popup.style.display = 'none';
});

// ПОПАП ДОБАВИТЬ КАРТОЧКУ

openPopupAddCard.addEventListener('click', () => {
  popupAddCard.classList.add('popup_opened');
  namePlaceInput.value = 'Название';
  srcImageInput.value = 'Ссылка на картинку';
  // popup.style.display = 'flex';
});

closePopupButtonAddCard.addEventListener('click', () => {
  popupAddCard.classList.remove('popup_opened');
  // popup.style.display = 'none';
});

formElementCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__text').textContent = namePlaceInput.value;
  cardElement.querySelector('.card__image').src = srcImageInput.value;
  cardsList.append(cardElement);
  popupAddCard.classList.remove('popup_opened');
});



