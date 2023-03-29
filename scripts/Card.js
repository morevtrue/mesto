import { popupViewPhoto, popupImageText, popupImage, cardsList, openPopup } from './index.js';

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

export class Card {
  constructor(data, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const cardImage = this._element.querySelector('.card__image');
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._element.querySelector('.card__text').textContent = this._name;
    
    return this._element;
  }

  _handleLikeCard() {
    const cardLike = this._element.querySelector('.card__like');
    cardLike.classList.toggle('card__like_active');
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handleClickPopupPhoto() {
    openPopup(popupViewPhoto);
    popupImage.src = this._link;
    popupImage.alt = this._link;
    popupImageText.textContent = this._name;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like').addEventListener('click', () => {
      this._handleLikeCard();
    });

    this._element.querySelector('.card__delete-button').addEventListener('click', () => {
      this._handleDeleteCard();
    });

    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleClickPopupPhoto();
    })
  }
}

initialCards.forEach(card => {
  const cardNew = new Card(card, '#card');
  const cardElement = cardNew.generateCard();
  cardsList.append(cardElement);
})