const modal = document.querySelector(".modal_overlay");
const btn = document.querySelector(".btn_add_new_book");


let deleteBtn = document.querySelectorAll(".bi-trash");


// modal 
let bookName = document.querySelector("#book_name");
let author = document.querySelector("#author");
let totalPages = document.querySelector("#totalPages");
let bookStatus = document.querySelector("#book_status");


let formSubmitBtn = document.querySelector("#add_book_form");


let myLibrary = [];


btn.onclick = function() {
    modal.style.display = "block";
}


window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


function Book(bookName, author, totalPages, bookStatus) {
    this.bookName = bookName;
    this.author = author;
    this.totalPages = totalPages;
    this.bookStatus = bookStatus;
}


function addBookToLibrary() {
    myLibrary.push(new Book(bookName, author, totalPages, bookStatus));
}


function Display() {
}


Display.prototype.add = function(book) {
    console.log("adding to UI");

    let read = (book.bookStatus === "read") ? "selected":"";
    let reading = (book.bookStatus === "reading") ? "selected":"";
    let wantToRead = (book.bookStatus === "wantToRead") ? "selected":"";
    
    let sectionGrid = document.querySelector(".section_grid");


    let uiString =  `<section class="section_item">

                        <img src="https://mlksathil.github.io/library/assets/web/svg-images/book/book3.svg" alt="Fig: Book cover image.">

                        <div class="book_description">
                        <h3>${book.bookName}</h3>
                            <p class="author_name">by ${book.author}</p>
                            <p>${book.totalPages} pages</p>
                        </div>
                            
                        <button><i class="bi bi-trash"></i></button>

                        <select>
                            <option value="read" selected="${read}">Read</option>
                            <option value="reading" selected="${reading}">Reading</option>
                            <option value="wantToRead" selected="${wantToRead}">Wan to read</option>
                        </select>

                     </section>`;

        sectionGrid.innerHTML += uiString;
}

Display.prototype.clear = function() {
    formSubmitBtn.reset();
}


formSubmitBtn.addEventListener('submit', bookFormSubmit);


function bookFormSubmit(e) {

    let book = new Book(bookName.value, author.value, totalPages.value, bookStatus.options[bookStatus.selectedIndex].value);
    console.log(book);

    let display = new Display();
    display.add(book);
    display.clear();

    modal.style.display = "none";

    e.preventDefault();
}


deleteBtn.forEach(deleteCard);


function deleteCard(item) {

    item.addEventListener('click', function() {
            console.log('yes press');
            item.parentElement.parentElement.remove();
    })
}