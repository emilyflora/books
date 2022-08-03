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
let myLibrary = [];

function Book(title, author, pages, bookStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookStatus = bookStatus;
}

let userTitle = document.getElementById('title')
let userAuthor = document.getElementById('author')
let userPages = document.getElementById('pages')
let userBookStatus = document.getElementById('status')

function addBookToLibrary() {
    const cardContainer = document.getElementById('card-container')
    const newBook = new Book(userTitle.value, userAuthor.value, userPages.value, userBookStatus.value)
    myLibrary.push(newBook);
    const card = '<div class="card"><span class="material-symbols-outlined delete">delete</span><h2>' + newBook.title + '</h2><p class="author">By: ' + newBook.author + '</p><div class="separator"></div><p class="pages"><span style="font-weight:bold">Length:</span> ' + newBook.pages + ' pages</p><p class="status"><span style="font-weight:bold">Status:</span> ' + newBook.bookStatus + '</p></div>'
    cardContainer.innerHTML += card;
    form.classList.remove('active');
    overlay.classList.remove('active');
}

// //Delete card with trash can click
// const deleteCard = document.querySelectorAll('span.delete')

// //Clear all books from library
// const clearAllButton = document.getElementById('clear-all')

// clearAllButton.addEventListener('click', () => {
//     alert('Are you sure you want to delete your entire library?')
// })
