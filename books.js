//Open and close form buttons
const openFormButton = document.getElementById('open-form')
const closeFormButton = document.getElementById('close-form')
const form = document.getElementById('form-display')

openFormButton.addEventListener('click', () => {
    form.classList.add('active')
    overlay.classList.add('active')
})

closeFormButton.addEventListener('click', () => {
    form.classList.remove('active')
    overlay.classList.remove('active')
})

//Add new book with form entry
const addButton = document.getElementById('submit-form')
const cardContainer = document.getElementById('card-container')

let myLibrary = [];

function Book(title, author, pages, bookStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookStatus = bookStatus;
}

const userTitle = document.getElementById('title').value
const userAuthor = document.getElementById('author').value
const userPages = document.getElementById('pages').value
const userBookStatus = document.getElementById('status').value
const newBook = new Book(userTitle, userAuthor, userPages, userBookStatus)

console.log(newBook)
console.log(myLibrary)

function addBookToLibrary() {
    myLibrary.push(newBook);
    console.log(myLibrary);
}

const card = '<div class="card"><span class="material-symbols-outlined delete">delete</span><h2>' + myLibrary.slice(0,1).toString() + '</h2><p class="author">By: ' + myLibrary.slice(1,2).toString() + '</p><div class="separator"></div><p class="pages"><span style="font-weight:bold">Length:</span> ' + myLibrary.slice(2,3).toString() + ' pages</p><p class="status"><span style="font-weight:bold">Status:</span> ' + myLibrary.slice(3,4).toString() + '</p></div>'

addButton.addEventListener('click', () => {
    addBookToLibrary();
    cardContainer.innerHTML += card;
    form.classList.remove('active');
    overlay.classList.remove('active');
})

// //Delete card with trash can click
// const deleteCard = document.querySelectorAll('span.delete')

// //Clear all books from library
// const clearAllButton = document.getElementById('clear-all')

// clearAllButton.addEventListener('click', () => {
//     alert('Are you sure you want to delete your entire library?')
// })
