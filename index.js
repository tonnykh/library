const modal = document.querySelector(".modal_overlay");
const btnAddBook = document.querySelector(".btn_add_new_book");


let deleteBtn = document.querySelectorAll(".bi-trash");


// modal 
let bookName = document.querySelector("#book_name");
let author = document.querySelector("#author");
let totalPages = document.querySelector("#totalPages");
let bookStatus = document.querySelector("#book_status");


let formSubmitBtn = document.querySelector("#add_book_form");


let myLibrary = [];


btnAddBook.onclick = function() {
    modal.style.display = "block";
}


window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


formSubmitBtn.addEventListener('submit', bookFormSubmit);


function bookFormSubmit(e) {

    let bookData = new Book(bookName.value, author.value, totalPages.value, bookStatus.options[bookStatus.selectedIndex].value);
    console.log(bookData);

    bookData.add(bookData);
    bookData.clear();

    modal.style.display = "none";

    e.preventDefault();
}


class Book {

    constructor(bookName, author, totalPages, bookStatus) {
        this.bookName = bookName;
        this.author = author;
        this.totalPages = totalPages;
        this.bookStatus = bookStatus;
    }

    add() {
        let read = (this.bookStatus === "read") ? "selected":"";
        let reading = (this.bookStatus === "reading") ? "selected":"";
        let wantToRead = (this.bookStatus === "wantToRead") ? "selected":"";
            
        let sectionGrid = document.querySelector(".section_grid");
        
        let uiString =  `
            <section class="section_item">
        
                <img src="https://mlksathil.github.io/library/assets/web/svg-images/book/book3.svg" alt="Fig: Book cover image.">
            
                <div class="book_description">
                <h3>${this.bookName}</h3>
                    <p class="author_name">by ${this.author}</p>
                    <p>${this.totalPages} pages</p>
                </div>
                                        
                <button><i class="bi bi-trash"></i></button>
            
                <select>
                    <option value="read" selected="${read}">Read</option>
                    <option value="reading" selected="${reading}">Reading</option>
                    <option value="wantToRead" selected="${wantToRead}">Want to read</option>
                </select>
        
            </section>
            `;
        
        sectionGrid.innerHTML += uiString;
    }

    clear() {
        formSubmitBtn.reset();
    }

}
    
function addBookToLibrary() {
    myLibrary.push(new Book(bookName, author, totalPages, bookStatus));
}


deleteBtn.forEach(deleteCard);

function deleteCard(item) {
    item.addEventListener('click', function() {
            console.log('yes press');
            item.parentElement.parentElement.remove();
    })
}