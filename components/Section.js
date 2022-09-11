export class Section {
    constructor (containerSelector) {
        this._containerElement = document.querySelector(containerSelector);
    }

    setElement (element) {
        this._containerElement.prepend(element);
    }
}