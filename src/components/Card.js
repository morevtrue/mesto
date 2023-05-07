import { api } from "./Api.js";

export default class Card {
  constructor(data, templateSelector, handleCardClick, openPopupConfirm) {
    this._link = data.link;
    this._name = data.name;
    this._id = data.id;
    this._likes = data.likes;
    this._likesCount = this._likes.length;
    this._owner = data.owner;
    this._profileId = data.profileId;
    this._isLike = this._likes.find((like) => {
      return like['_id'] === this._profileId;
    });
    this._isOwner = this._owner['_id'] === this._profileId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._openPopupConfirm = openPopupConfirm;
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
    this._likeCounter = this._element.querySelector('.card__like-counter');
    this._likeCounter.textContent = this._likesCount;
    this._deleteButton = this._element.querySelector('.card__delete-button');
    
    if (this._isOwner) {
      this._deleteButton.classList.remove('card__delete-button_disabled');
    }
    
    if (this._isLike) {
      this._likeCard();
    }

    this._setEventListeners();

    return this._element;
  }

  _handleLikeCard() {
    if (!this._isLike) {
      this._isLike = 1;
      api.addLike(this._id)
        .then((res) => {
          const count = res.likes.length;
          this._likeCard();
          this._likeCounter.textContent = count;
          return count;
        });
    } else {
      this._isLike = 0;
      api.removeLike(this._id)
        .then((res) => {
          const count = res.likes.length;
          this._dislikeCard();
          this._likeCounter.textContent = count;
          return count;
        });
    }  
  }

  _likeCard() {
    this._likeButton.classList.add('card__like_active');
  }

  _dislikeCard() {
    this._likeButton.classList.remove('card__like_active');
  }

  handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeCard();
    });

    this._deleteButton.addEventListener('click', () => {
      this._openPopupConfirm(this, this._id)
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    })
  }
}