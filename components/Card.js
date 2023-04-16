export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    this._cardImage = this._element.querySelector('.card__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.card__text').textContent = this._name;
    this._likeButton = this._element.querySelector('.card__like');
    this._setEventListeners();

    return this._element;
  }

  _handleLikeCard() {
    this._likeButton.classList.toggle('card__like_active');
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeCard();
    });

    this._element.querySelector('.card__delete-button').addEventListener('click', () => {
      this._handleDeleteCard();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
  }
}