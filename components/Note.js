export class Note {
    constructor(text, templateSelector) {
        this._text = text;
        this._templateSelector = templateSelector;
    }

    generateNote () {
        const template = this._createNote();
        return template;
    }

    _getTemplate() {
        const noteTemplate = document.querySelector(this._templateSelector).content.querySelector('.todolist-item').cloneNode(true);
        return noteTemplate;
    }

    _createNote () {
        this._element = this._getTemplate(); //элемент карточки
        const textElement = this._element.querySelector('.todolist-item__text');
        textElement.textContent = this._text;
        this._setEventListeners();
        return this._element;
    }

    _setEventListeners () {
        this._deleteButton = this._element.querySelector('.todolist-item__delete');
        this._deleteButton.addEventListener ('click', () => this._element.remove());
    }
}