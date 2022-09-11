import { Section } from '../components/Section.js';
import { TodolistForm  } from '../components/TodolistForm.js'
import { Note  } from '../components/Note.js'
// import { constants } from '../utils/constants.js'

const selectors = {
    todolistForm: '.todolist-form',
    addButton: '.todolist-form__button',
    newNoteInput: '.todolist-form__input',
    notesContainer: '.todolist-items',
    noteTemplate: '.note-template'
}
const todolistFormElement = document.querySelector(selectors.todolistForm);
// const addButtonElement = todolistFormElement.querySelector(selectors.addButton);
// const newNoteInputElement = todolistFormElement.querySelector(selectors.newNoteInput);

const nodesSection = new Section (selectors.notesContainer);

const todolistForm = new TodolistForm ({
    formElement: todolistFormElement,
    handleSubmitForm: (formData) => {
        const newNote = new Note (formData.newNodeInput, selectors.noteTemplate);
        const noteElement = newNote.generateNote();
        nodesSection.setElement(noteElement);
    }
});

todolistForm.setEventListeners();