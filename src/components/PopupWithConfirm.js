import PopupWithForm from "./PopupWithForm.js";

export default class PopupWithConfirm extends PopupWithForm {
  constructor(popupSelector, handleFormDeleteSubmit) {
    super(popupSelector, handleFormDeleteSubmit);
    this._handleFormDeleteSubmit = handleFormDeleteSubmit;
    this._handleDeleteCardSubmit = this._handleDeleteCardSubmit.bind(this);
    }

  _handleDeleteCardSubmit(evt) {
    evt.preventDefault();
    this._handleFormDeleteSubmit(this._card, this._cardId);
  }

  _setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleDeleteCardSubmit);
  }

  open(card, cardId) {
    this._card = card;
    this._cardId = cardId;
    super.open();
    this._setEventListeners();
  }

}