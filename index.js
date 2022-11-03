const modal = document.querySelector(".modal_overlay");
const btn = document.querySelector(".btn_add_new_book");






btn.onclick = function() {
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}