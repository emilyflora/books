//Open and close form buttons
const openFormButton = document.getElementById('open-form');
const closeFormButton = document.getElementById('close-form');
const form = document.getElementById('form-display');

openFormButton.addEventListener('click', () => {
    form.classList.add('active');
    overlay.classList.add('active');
})

closeFormButton.addEventListener('click', () => {
    form.classList.remove('active');
    overlay.classList.remove('active');
})

// Delete card with trash can click
// On click, identify data attribute value of trash, match value to library array, remove array data from library, refresh library display
// function trashButton() {
//     const dataArray = Array.from(document.querySelectorAll('[data-value]'));
//     console.log(dataArray);
//     for(i = 0; i < dataArray.length; i++) {
//         dataArray[i].addEventListener('click', () => { 

//         });
// }}
function trash() {
    const dataValue = document.querySelector('[data-value]');
    dataValue.addEventListener('click', () => {
        console.log('hi')
    });
}

//Add new book with form entry
let myLibrary = [];

function Book(title, author, pages, bookStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookStatus = bookStatus;
}

let userTitle = document.getElementById('title');
let userAuthor = document.getElementById('author');
let userPages = document.getElementById('pages');
let userBookStatus = document.getElementById('status');
const cardContainer = document.getElementById('card-container');

function clearFields() {
    userTitle.value = "";
    userAuthor.value = "";
    userPages.value = "";
    userBookStatus.value = "";
}

function addBookToLibrary() {
    const newBook = new Book(userTitle.value, userAuthor.value, userPages.value, userBookStatus.value);
    myLibrary.push(newBook);
    console.log(myLibrary);
    const card = '<div class="card"><span class="material-symbols-outlined delete" data-value="' + (myLibrary.length-1) + '">delete</span><h2>' + myLibrary[myLibrary.length-1].title + '</h2><p class="author">By: ' + myLibrary[myLibrary.length-1].author + '</p><div class="separator"></div><p class="pages"><span style="font-weight:bold">Length:</span> ' + myLibrary[myLibrary.length-1].pages + ' pages</p><p class="status"><span style="font-weight:bold">Status:</span> ' + myLibrary[myLibrary.length-1].bookStatus + '</p></div>';
    if(cardContainer.innerHTML !== '') {
        cardContainer.insertAdjacentHTML('afterbegin', card)
    } else {
        cardContainer.innerHTML += card;
    }
    form.classList.remove('active');
    overlay.classList.remove('active');
    clearFields();
    trash();
}

// Clear all cards
function clearAll() {
    if (myLibrary.length > 0) {
        if (window.confirm("Are you sure you want to clear your library?")) {
            cardContainer.innerHTML = "";
    }}
}

// Edit book information