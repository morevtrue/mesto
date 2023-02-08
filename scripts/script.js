let profile = document.querySelector('.profile');
let profileEditButton = profile.querySelector('.profile__edit-button');
let profileTitle = profile.querySelector('.profile__title');
let profileSubtitle = profile.querySelector('.profile__subtitle');
let popup = document.querySelector('.popup');
let popupCloseButton = popup.querySelector('.popup__close-button');
let formElement = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__text_input_name');
let jobInput = popup.querySelector('.popup__text_input_job');

profileEditButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  popup.classList.add('popup_opened');
  // popup.style.display = 'flex';
});

popupCloseButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  popup.classList.remove('popup_opened');
  // popup.style.display = 'none';
});

formElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
  // popup.style.display = 'none';
});

