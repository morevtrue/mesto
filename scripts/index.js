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
const namePlaceInput = popupAddCard.querySelector('.popup__text_input_place');
const srcImageInput = popupAddCard.querySelector('.popup__text_input_src');
const formElementCard = popupAddCard.querySelector('.popup__form');

const cardTemplate = document.querySelector('#card').content;
const cardsList = document.querySelector('.cards__list');
const cardLike = document.querySelectorAll('.card__like');
// const cardName = cardTemplate.querySelector('.card__text');
// const cardImage = cardTemplate.querySelector('.card__image');

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

// ОТКРЫТЬ ПОПАП

function openPopup(currentPopup) {
  currentPopup.classList.add('popup_opened');
};

// ЗАКРЫТЬ ПОПАП

function closePopup(currentPopup, closePopupButton) {
  closePopupButton.addEventListener('click', () => {
    currentPopup.classList.remove('popup_opened');
  });
}

// ЛАЙКНУТЬ КАРТОЧКУ

function likeButton(currentElement) {
  currentElement.querySelector('.card__like').addEventListener('click', evt => {
    evt.target.classList.toggle('card__like_active');
  })
}

// ЗАГРУЗКА ГАЛЕРЕИ ФОТОГРАФИЙ НА СТРАНИЦУ

const galleryCard = initialCards.forEach(card => {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  likeButton(cardElement);
  cardElement.querySelector('.card__image').src = card.link;
  cardElement.querySelector('.card__text').textContent = card.name;
  cardsList.append(cardElement);
});

// ПОПАП ПРОФИЛЬ

openPopupProfile.addEventListener('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  // popup.style.display = 'flex';
});

closePopup(popupEditProfile, closePopupButtonProfile);

formElementProfile.addEventListener('submit', evt => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  popupEditProfile.classList.remove('popup_opened');
  // popup.style.display = 'none';
});

// ПОПАП ДОБАВИТЬ КАРТОЧКУ

openPopupAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});

closePopup(popupAddCard, closePopupButtonAddCard);

formElementCard.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  likeButton(cardElement);
  cardElement.querySelector('.card__text').textContent = namePlaceInput.value;
  cardElement.querySelector('.card__image').src = srcImageInput.value;
  cardsList.prepend(cardElement);
  popupAddCard.classList.remove('popup_opened');
  namePlaceInput.value = '';
  srcImageInput.value = '';
});






