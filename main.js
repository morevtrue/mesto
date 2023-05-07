(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._objectSettingsValidation=e,this._elementFormValidation=n}var n,r;return n=t,(r=[{key:"_hasInvalidInput",value:function(){return Array.from(this._inputList).some((function(t){return!t.validity.valid}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideInputError(e)}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._objectSettingsValidation.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._objectSettingsValidation.inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_showInputError",value:function(t,e){t.classList.add(this._objectSettingsValidation.inputErrorClass),this._errorElement.textContent=e,this._errorElement.classList.add(this._objectSettingsValidation.errorClass)}},{key:"_hideInputError",value:function(t){var e=this;t.classList.remove(this._objectSettingsValidation.inputErrorClass),this._errorElementList=this._elementFormValidation.querySelectorAll(".".concat(t.id,"-error")),this._errorElementList.forEach((function(t){t&&(t.classList.remove(e._objectSettingsValidation.errorClass),t.textContent="")}))}},{key:"_checkInputValidity",value:function(t){this._errorElement=this._elementFormValidation.querySelector(".".concat(t.id,"-error")),t.validity.valid?this._hideInputError(t):this._showInputError(t,t.validationMessage)}},{key:"_setEventListeners",value:function(){var t=this;this._inputList=Array.from(this._elementFormValidation.querySelectorAll(this._objectSettingsValidation.inputSelector)),this._buttonElement=this._elementFormValidation.querySelector(this._objectSettingsValidation.submitButtonSelector),this._toggleButtonState(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._token=e.headers.authorization,this._contentType=e.headers["Content-Type"]}var e,n;return e=t,(n=[{key:"_getCheck",value:function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}},{key:"getInitialCards",value:function(){var t=this;return fetch(this._baseUrl+"cards",{headers:{authorization:this._token}}).then((function(e){return t._getCheck(e)}))}},{key:"addNewCard",value:function(t){var e=this,n=t.name,r=t.link;return fetch(this._baseUrl+"cards",{method:"POST",headers:{authorization:this._token,"Content-Type":this._contentType},body:JSON.stringify({name:n,link:r})}).then((function(t){return e._getCheck(t)}))}},{key:"getProfileContent",value:function(){var t=this;return fetch(this._baseUrl+"users/me",{headers:{authorization:this._token}}).then((function(e){return t._getCheck(e)}))}},{key:"submitProfileData",value:function(t){var e=this,n=t.name,r=t.about;return fetch(this._baseUrl+"users/me",{method:"PATCH",headers:{authorization:this._token,"Content-Type":this._contentType},body:JSON.stringify({name:n,about:r})}).then((function(t){return e._getCheck(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch(this._baseUrl+"cards/".concat(t),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return e._getCheck(t)}))}},{key:"addLike",value:function(t){var e=this;return fetch(this._baseUrl+"cards/".concat(t,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then((function(t){return e._getCheck(t)}))}},{key:"removeLike",value:function(t){var e=this;return fetch(this._baseUrl+"cards/".concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then((function(t){return e._getCheck(t)}))}},{key:"submitEditAvatar",value:function(t){var e=this,n=t.avatar;return fetch(this._baseUrl+"users/me/avatar",{method:"PATCH",headers:{authorization:this._token,"Content-Type":this._contentType},body:JSON.stringify({avatar:n})}).then((function(t){return e._getCheck(t)}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-65/",headers:{authorization:"3f6b2ef5-b9e5-4ebd-9f38-797a06c223a7","Content-Type":"application/json"}});function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var l=function(){function t(e,n,r,o){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=e.link,this._name=e.name,this._id=e.id,this._likes=e.likes,this._likesCount=this._likes.length,this._owner=e.owner,this._profileId=e.profileId,this._isLike=this._likes.find((function(t){return t._id===i._profileId})),this._isOwner=this._owner._id===this._profileId,this._templateSelector=n,this._handleCardClick=r,this._openPopupConfirm=o}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__image"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element.querySelector(".card__text").textContent=this._name,this._likeButton=this._element.querySelector(".card__like"),this._likeCounter=this._element.querySelector(".card__like-counter"),this._likeCounter.textContent=this._likesCount,this._deleteButton=this._element.querySelector(".card__delete-button"),this._isOwner&&this._deleteButton.classList.remove("card__delete-button_disabled"),this._isLike&&this._likeCard(),this._setEventListeners(),this._element}},{key:"_handleLikeCard",value:function(){var t=this;this._isLike?(this._isLike=0,i.removeLike(this._id).then((function(e){var n=e.likes.length;return t._dislikeCard(),t._likeCounter.textContent=n,n}))):(this._isLike=1,i.addLike(this._id).then((function(e){var n=e.likes.length;return t._likeCard(),t._likeCounter.textContent=n,n})))}},{key:"_likeCard",value:function(){this._likeButton.classList.add("card__like_active")}},{key:"_dislikeCard",value:function(){this._likeButton.classList.remove("card__like_active")}},{key:"handleDeleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){t._handleLikeCard()})),this._deleteButton.addEventListener("click",(function(){t._openPopupConfirm(t,t._id)})),this._cardImage.addEventListener("click",(function(){t._handleCardClick(t._name,t._link)}))}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var f=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.append(t)}},{key:"addItemPrepend",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(){var t=this;this._renderedItems.forEach((function(e){t._renderer(e)}))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,h(r.key),r)}}function h(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===p(e)?e:String(e)}var d=function(){function t(e){var n,r,o,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=function(){i.close()},(r=h(r="_handleCloseButton"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleClickOverlay",value:function(t){t.target===t.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popupCloseButton.addEventListener("click",this._handleCloseButton),this._popup.addEventListener("click",(function(e){t._handleClickOverlay(e)}))}}])&&y(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(o){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupImageText=e._popup.querySelector(".popup__image-text"),e}return e=u,(n=[{key:"open",value:function(t,e){this._popupImage.src=e,this._popupImage.alt=t,this._popupImageText.textContent=t,_(g(u.prototype),"open",this).call(this)}}])&&m(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},j.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function P(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(r);if(o){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return P(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(".popup__form"),n._submitButton=n._form.querySelector(".popup__submit-button"),n._submitButtonText=n._submitButton.textContent,n._inputList=Array.from(n._form.querySelectorAll(".popup__form-input")),n._handleFormPopupSubmit=e,n._handleFormPopupSubmitUpd=n._handleFormPopupSubmitUpd.bind(P(n)),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputValues={},this._inputList.forEach((function(e){t._inputValues[e.name]=e.value})),this._inputValues}},{key:"_handleFormPopupSubmitUpd",value:function(t){t.preventDefault(),this._handleFormPopupSubmit(this._getInputValues())}},{key:"setEventListeners",value:function(){j(E(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleFormPopupSubmitUpd)}},{key:"close",value:function(){j(E(u.prototype),"close",this).call(this),this._form.reset()}},{key:"isLoading",value:function(t){this._submitButton.textContent=t||this._submitButtonText}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(d);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}var T=function(){function t(e){var n=e.profileNameSelector,r=e.profileJobSelector,o=e.profileAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(n),this._profileJob=document.querySelector(r),this._avatar=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{profileName:this._profileName.textContent,profileJob:this._profileJob.textContent,profileAvatar:this._avatar}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.job,r=t.avatar;this._profileName.textContent=e,this._profileJob.textContent=n,this._avatar.src=r}},{key:"changeAvatar",value:function(t){this._avatar.src=t}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},x.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function V(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(r);if(o){var n=D(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===q(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return V(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t,e))._handleFormDeleteSubmit=e,n._handleDeleteCardSubmit=n._handleDeleteCardSubmit.bind(V(n)),n}return e=u,(n=[{key:"_handleDeleteCardSubmit",value:function(t){t.preventDefault(),this._handleFormDeleteSubmit(this._card,this._cardId)}},{key:"_setEventListeners",value:function(){x(D(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleDeleteCardSubmit)}},{key:"open",value:function(t,e){this._card=t,this._cardId=e,x(D(u.prototype),"open",this).call(this),this._setEventListeners()}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(C),U=document.querySelector(".profile"),F=U.querySelector(".profile__edit-button"),N=U.querySelector(".profile__add-button"),z=document.querySelector(".popup_edit_profile"),J=z.querySelector(".popup__text_input_name"),H=z.querySelector(".popup__text_input_job"),M=(U.querySelector(".popup_add_card"),document.querySelector(".profile__avatar-button")),G=document.querySelector(".popup__text_input_avatar");function K(t){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(t)}function Q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function W(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Q(Object(n),!0).forEach((function(e){X(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function X(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==K(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==K(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===K(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Y,Z={};Y={formSelector:".popup__form",inputSelector:".popup__form-input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive",inputErrorClass:"popup__text_type_error",errorClass:"popup__form-error_active"},Array.from(document.querySelectorAll(Y.formSelector)).forEach((function(t){var e=new n(Y,t),r=t.getAttribute("name");Z[r]=e,e.enableValidation()}));var $,tt,et=function(t,e){nt.open(t,e)},nt=new A(".popup_delete_confirm",(function(t,e){void 0!==e&&i.deleteCard(e).then((function(){t.handleDeleteCard(),nt.close()})).catch((function(t){return console.log(t)}))})),rt=new S(".popup_open_image"),ot=function(t,e){rt.open(t,e),rt.setEventListeners()},it=function(t){return new l(t,"#card",ot,et).generateCard()},ut=new C(".popup_add_card",(function(t){return ut.isLoading("Сохранение..."),i.addNewCard({name:t.popupInputPlace,link:t.popupInputSrc}).then((function(t){tt.addItemPrepend(it(W({id:t._id,profileId:$},t))),ut.close()})).catch((function(t){ut.isLoading(),console.log(t)})).finally((function(){ut.isLoading()}))}));N.addEventListener("click",(function(){ut.open(),ut.setEventListeners(),Z.formCard.resetValidation()}));var at=new T({profileNameSelector:".profile__title",profileJobSelector:".profile__subtitle",profileAvatarSelector:".profile__avatar"});i.getProfileContent().then((function(t){return $=t._id,i.getInitialCards().then((function(t){!function(t){(tt=new f({items:t.map((function(t){return{name:t.name,link:t.link,id:t._id,owner:t.owner,isOwner:t.owner._id===$,likes:t.likes}})),renderer:function(t){var e=it(W({profileId:$},t));tt.addItem(e)}},".cards__list")).renderItems()}(t)})).catch((function(t){return console.log(t)})),at.setUserInfo({name:t.name,job:t.about,avatar:t.avatar}),t})).catch((function(t){return console.log(t)}));var lt=new C(".popup_edit_profile",(function(t){lt.isLoading("Сохранение..."),i.submitProfileData({name:t[J.name],about:t[H.name]}).then((function(t){at.setUserInfo({name:t.name,job:t.about,avatar:t.avatar}),lt.close()})).catch((function(t){return console.log(t)})).finally((function(){lt.isLoading()}))}));F.addEventListener("click",(function(){lt.open(),lt.setEventListeners();var t=at.getUserInfo(),e=t.profileName,n=t.profileJob;J.value=e,H.value=n,Z.formProfile.resetValidation()}));var ct=new C(".popup_change_avatar",(function(t){return ct.isLoading("Сохранение..."),i.submitEditAvatar({avatar:t[G.name]}).then((function(t){at.changeAvatar(t.avatar),ct.close()})).catch((function(t){ct.isLoading(),console.log(t)})).finally((function(){ct.isLoading()}))}));M.addEventListener("click",(function(){ct.open(),ct.setEventListeners(),Z.formAvatar.resetValidation()}))})();