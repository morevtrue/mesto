export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButton = this._popup.querySelector('.popup__close-button');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleCloseButton = () => {
    this.close();
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleClickOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popupCloseButton.addEventListener('click', this._handleCloseButton);
    this._popup.addEventListener('click', (evt) => {
      this._handleClickOverlay(evt);
    })
  }
}
