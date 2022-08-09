let myLibrary = [];

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
function trash() {
    const dataValues = Array.from(document.querySelectorAll('[data-value]'));
    dataValues.forEach(value => {
        value.addEventListener('click', (e) => {
            const cardValue = e.currentTarget.dataset.value;
            myLibrary.splice(cardValue,1);
            cardContainer.innerHTML = '';
            libraryDisplay();
        });
    })
}

//Add new book with form entry
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

function libraryDisplay() {
for(i=0; i<myLibrary.length; i++) {
    const card = '<div class="card"><span class="material-symbols-outlined delete" data-value="' + i + '">delete</span><h2>' + myLibrary[i].title + '</h2><p class="author">By: ' + myLibrary[i].author + '</p><div class="separator"></div><p class="pages"><span style="font-weight:bold">Length:</span> ' + myLibrary[i].pages + ' pages</p><p class="status"><span style="font-weight:bold">Status:</span> ' + myLibrary[i].bookStatus + '</p></div>';
    if(cardContainer.innerHTML !== '') {
        cardContainer.insertAdjacentHTML('afterbegin', card);
    } else {
        cardContainer.innerHTML += card;
    }
}}

function addBookToLibrary() {
    cardContainer.innerHTML = '';
    const newBook = new Book(userTitle.value, userAuthor.value, userPages.value, userBookStatus.value);
    myLibrary.push(newBook);
    form.classList.remove('active');
    overlay.classList.remove('active');
    clearFields();
    libraryDisplay();
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