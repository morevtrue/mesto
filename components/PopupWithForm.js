import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormPopupSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._form.querySelectorAll('.popup__form-input'));
    this._handleFormPopupSubmit = (evt) => {
      evt.preventDefault();
      handleFormPopupSubmit(this._getInputValues());
      this.close();
    };
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleFormPopupSubmit);
  }

  close() {
    super.close();
    this._form.removeEventListener('submit', this._handleFormPopupSubmit);
    this._form.reset();
  }
}