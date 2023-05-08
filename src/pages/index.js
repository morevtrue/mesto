import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import { api } from '../components/Api.js';
import {
  popupProfileButton,
  popupAddCardButton,
  nameInput,
  jobInput,
  settingsValidation,
  popupAvatarButton,
  popupInputAvatar
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

// ПОПАП ПОДТВЕРЖДЕНИЯ УДАЛЕНИЯ----------------------
const openPopupConfirm = (card, cardId) => {
  popupDeleteConfirm.open(card, cardId);
};

const handleDeleteCardSubmit = (card, cardId) => {
  if (cardId !== undefined) {
    api.deleteCard(cardId)
    .then(() => {
      card.handleDeleteCard();
      popupDeleteConfirm.close();
    })
    .catch((err) => console.log(err));
  }
};

const popupDeleteConfirm = new PopupWithConfirm('.popup_delete_confirm', handleDeleteCardSubmit);

// ПОПАП ПОСМОТРЕТЬ ФОТО---------------------------
const popupWithImage = new PopupWithImage('.popup_open_image');

const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
};

// СОЗДАТЬ КАРТОЧКУ--------------------------------
const createCard = (item) => {
  const cardNew = new Card(item, '#card', handleCardClick, openPopupConfirm, likeCard, dislikeCard);
  const cardElement = cardNew.generateCard();
  return cardElement;
};

// УСТАНОВКА И СНЯТИЕ ЛАЙКА------------------------
const likeCard = (card, cardId) => {
  api.addLike(cardId)
    .then((res) => {
      const count = res.likes.length;
      card.like();
      card.changeCounter(count);
    });
};

const dislikeCard = (card, cardId) => {
  api.removeLike(cardId)
    .then((res) => {
      const count = res.likes.length;
      card.dislike();
      card.changeCounter(count);
    });
};

// ЗАГРУЗКА ИЗНАЧАЛЬНЫХ КАРТОЧЕК-------------------
let userId;

const cardsSection = new Section({
  renderer: (item) => {
    const cardElement = createCard({ profileId: userId, ...item });
    cardsSection.addItem(cardElement);
  },
}, '.cards__list');

const renderSection = (data) => {
  cardsSection.renderItems({
    items: data.map((item) => ({
      name: item.name,
      link: item.link,
      id: item['_id'],
      owner: item.owner,
      isOwner: item.owner['_id'] === userId,
      likes: item.likes
    })),
  });
};

// ОТОБРАЖЕНИЕ СТРАНИЦЫ---------------------------------
Promise.all([
  api.getProfileContent(),
  api.getInitialCards()
])
  .then(([info, initialCards]) => {
    userId = info['_id'];
    profileInfo.setUserInfo({
      name: info.name,
      job: info.about,
      avatar: info.avatar
    });

    renderSection(initialCards);    
  })
  .catch((err) => console.log(err));

// ПОПАП ДОБАВИТЬ КАРТОЧКУ---------------------------
const handleFormAddCardSubmit = (inputValues) => {
  popupFormCard.isLoading('Сохранение...')
  api.addNewCard({
    name: inputValues['popupInputPlace'],
    link: inputValues['popupInputSrc']
  })
    .then((data) => {
      cardsSection.addItemPrepend(createCard({
        id: data['_id'],
        profileId: userId,
        ...data
      }));
      popupFormCard.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupFormCard.isLoading();
    })
};

const popupFormCard = new PopupWithForm('.popup_add_card', handleFormAddCardSubmit);

const handleClickPopupAddCard = () => {
  popupFormCard.open();
  formValidators['formCard'].resetValidation();
};

popupAddCardButton.addEventListener('click', handleClickPopupAddCard);

// ПОПАП ПРОФИЛЬ-----------------------------------
const profileInfo = new UserInfo({
  profileNameSelector: '.profile__title',
  profileJobSelector: '.profile__subtitle',
  profileAvatarSelector: '.profile__avatar'
});

const handleFormProfileSubmit = (inputValues) => {
  popupFormProfile.isLoading('Сохранение...');
  api.submitProfileData({
    name: inputValues[nameInput.name],
    about: inputValues[jobInput.name]
  })
    .then((data) => {
      profileInfo.setUserInfo({
        name: data.name,
        job: data.about,
        avatar: data.avatar
      });
      popupFormProfile.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupFormProfile.isLoading();
    })
};

const popupFormProfile = new PopupWithForm('.popup_edit_profile', handleFormProfileSubmit);

const handleClickPopupProfile = () => {
  popupFormProfile.open();
  const { profileName: name, profileJob: job } = profileInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = job;
  formValidators['formProfile'].resetValidation();
};

popupProfileButton.addEventListener('click', handleClickPopupProfile);

//ПОПАП ИЗМЕНИТЬ АВАТАР---------------------------
const handleFormAvatarSubmit = (inputValues) => {
  popupAvatar.isLoading('Сохранение...');
  api.submitEditAvatar({
    avatar: inputValues[popupInputAvatar.name]
  })
    .then((data) => {
      profileInfo.changeAvatar(data.avatar);
      popupAvatar.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupAvatar.isLoading();
    })
};

const popupAvatar = new PopupWithForm('.popup_change_avatar', handleFormAvatarSubmit);

const handleClickPopupAvatar = () => {
  popupAvatar.open();
  formValidators['formAvatar'].resetValidation();
};

popupAvatarButton.addEventListener('click', handleClickPopupAvatar);
