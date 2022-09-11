export class TodolistForm {
    constructor({formElement, handleSubmitForm}) {
        this._formElement = formElement;
        this._handleSubmitForm = handleSubmitForm;
        this._inputElement = this._formElement.querySelector('.todolist-form__input');
    }

    _getInputValues () {
        this._formData = {};
        this._formData[this._inputElement.name] = this._inputElement.value;
    }

    setEventListeners () {
        this._formElement.addEventListener ('submit', (evt) => {
            evt.preventDefault();
            this._getInputValues();
            this._handleSubmitForm(this._formData);
            this._formElement.reset();
        })
    }
}