import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormPopupSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._form.querySelector('.popup__submit-button');
    this._submitButtonText = this._submitButton.textContent;
    this._inputList = Array.from(this._form.querySelectorAll('.popup__form-input'));
    this._handleFormPopupSubmit = handleFormPopupSubmit;
    this._handleFormPopupSubmitUpd = this._handleFormPopupSubmitUpd.bind(this);
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  _handleFormPopupSubmitUpd(evt) {
      evt.preventDefault();
      this._handleFormPopupSubmit(this._getInputValues());
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleFormPopupSubmitUpd);
  }

  close() {
    super.close();
    this._form.reset();
  }

  isLoading(text) {
    if (text) {
      this._submitButton.textContent = text;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }


}