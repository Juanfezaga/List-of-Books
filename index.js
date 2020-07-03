const displayMenu = document.querySelector("#button-show")
const myLibrary = []
const addBtn = document.querySelector("#btn-add")
var counter = 1
function Book(id, title,author,pages,read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.addBook = function (){
    myLibrary.push({
        id: this.id,
        title: this.title,
        author: this.author,
        pages: this.pages,
        read: this.read
    })
}


displayMenu.addEventListener("click", ()=>{
    const hideMenu = document.querySelector(".hide-menu") 
    if (hideMenu.style.display === "none") {
        hideMenu.style.display = "flex"
    } else {
            hideMenu.style.display = "none"
    }
})

addBtn.addEventListener('click', ()=>{
    
    const BookTitle = document.querySelector(".title")
    const BookAuthor = document.querySelector(".author")
    const BookPages = document.querySelector(".pages")
    const choiceSelected = document.querySelector(".radio-menu")
    const valueRadio1 = choiceSelected.querySelector(".no-read")
    const valueRadio2 = choiceSelected.querySelector(".read")
    if(valueRadio1.checked){
        let newBook = new Book(counter,BookTitle.value, BookAuthor.value, BookPages.value, "No")
        newBook.addBook()
        counter++
        console.log(myLibrary)
    }else if(valueRadio2.checked){
        let newBook = new Book(counter, BookTitle.value, BookAuthor.value, BookPages.value, "Yes")
        newBook.addBook()
        counter++
    }
    
})




const showList = document.querySelector("#show-list")

showList.addEventListener("click", () => {


    myLibrary.forEach(book => {
        const tableList = document.querySelector("#list-books")
        const newRow = document.createElement("TR")
        tableList.appendChild(newRow)
        for(data in book){
            let referenceBook = document.createElement("TD")
            referenceBook.innerText = book[data]
            newRow.appendChild(referenceBook)
        }
    })
})
