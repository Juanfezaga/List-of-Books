
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


const tableBody = document.querySelector("#body-rows")
//const rowBody = document.querySelector("TR")
function removeRows(){
    while(tableBody.firstChild){
        tableBody.removeChild(tableBody.lastChild)
    }
}

function render(myLibrary){
    removeRows()
    myLibrary.forEach(book => {
        const newRow = document.createElement("TR")
        newRow.setAttribute("data-index", `${myLibrary.indexOf(book)}`)
        tableBody.appendChild(newRow)
        const deleteRow = document.createElement("TD")
        const deleteButton = document.createElement("button")
        deleteButton.innerText = "Delete Book"
        for(data in book){
            let referenceBook = document.createElement("TD")
            referenceBook.innerText = book[data]
            newRow.appendChild(referenceBook)
        }
        deleteRow.appendChild(deleteButton)
        newRow.appendChild(deleteRow)

        deleteButton.addEventListener('click', () => {
            myLibrary.splice(book, 1)
            newRow.parentNode.removeChild(newRow)
            console.log(myLibrary)
        })    
    })
    
}

const displayMenu = document.querySelector("#button-show")
const hideMenu = document.querySelector("#menu")
displayMenu.addEventListener("click", ()=>{
    (hideMenu.style.display === "none")?hideMenu.style.display="flex":hideMenu.style.display = "none";
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
        render(myLibrary)
    }else if(valueRadio2.checked){
        let newBook = new Book(counter, BookTitle.value, BookAuthor.value, BookPages.value, "Yes")
        newBook.addBook()
        counter++
        render(myLibrary)
    }
    
})
