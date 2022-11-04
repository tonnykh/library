const modal = document.querySelector(".modal_overlay");
const btn = document.querySelector(".btn_add_new_book");

let bookName = document.querySelector("#book_name");
let author = document.querySelector("#author");
let totalPages = document.querySelector("#totalPages");






const formSubmitBtn = document.querySelector("#add_book_form");


let myLibrary = [];



btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


function Book(bookName, author, totalPages) {
    this.bookName = bookName;
    this.author = author;
    this.totalPages = totalPages;
}

function addBookToLibrary() {
    myLibrary.push(new Book(bookName, author, totalPages));
}


// display constructor
function Display() {

}




// display book
Display.prototype.add = function(book) {
    console.log("adding to UI");

    let sectionGrid = document.querySelector(".section_grid");
    let uiString =  `<section class="section_item">

    <img src="https://m.media-amazon.com/images/I/710+HcoP38L.jpg" alt="The Hobbit book cover">

    <div class="book_description">
        <h3>${book.bookName}</h3>
        <p class="author_name">by ${book.author}</p>
        <p>${book.totalPages} pages</p>
    </div>
    

        <button><i class="bi bi-trash"></i></button>

        <select>
            <option value="read">Read</option>
            <option value="reading">Reading</option>
            <option value="wantToRead">Want to read</option>
        </select>

    

</section>`;

    
        sectionGrid.innerHTML += uiString;


}


// Display.prototype = Object.create(Book.prototype);

formSubmitBtn.addEventListener('submit', bookFormSubmit);




function bookFormSubmit(e) {

    let book = new Book(bookName.value, author.value, totalPages.value);
    console.log(book);


    let display = new Display();
    display.add(book);



    e.preventDefault();
}


const deleteBtn = document.querySelectorAll(".bi-trash");

deleteBtn.forEach(function(item) {
    item.addEventListener('click', function() {
        item.parentNode.parentNode.remove();
    })
});





