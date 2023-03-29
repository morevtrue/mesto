export const settingsValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__form-error_active',
}

export class FormValidator {
  constructor(objectSettingsValidation, elementFormValidation) {
    this._objectSettingsValidation = objectSettingsValidation;
    this._elementFormValidation = elementFormValidation;
  }

  _hasInvalidInput() {
    const inputArray = Array.from(this._inputList);
    return inputArray.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._objectSettingsValidation.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._objectSettingsValidation.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  }

  _showInputError(inputElement, errorMessage) {
    inputElement.classList.add(this._objectSettingsValidation.inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._objectSettingsValidation.errorClass);
  }

  _hideInputError(inputElement) {
    inputElement.classList.remove(this._objectSettingsValidation.inputErrorClass);
    this._errorElement.classList.remove(this._objectSettingsValidation.errorClass);
    this._errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) {
    this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(this._form.querySelectorAll(this._objectSettingsValidation.inputSelector));
    this._buttonElement = this._form.querySelector(this._objectSettingsValidation.submitButtonSelector);

    this.toggleButtonState();

    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._form = document.querySelector(this._elementFormValidation);
    this._setEventListeners();
  }
}