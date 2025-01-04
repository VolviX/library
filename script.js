const myLibrary = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true),
    new Book("Brave New World", "Aldous Huxley", 268, false),
    new Book("Pride and Prejudice", "Jane Austen", 279, true),
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.getInfo = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "already read." : "not read yet."}`;
    };
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    return newBook;
}

function display() {
    list.replaceChildren();
    myLibrary.forEach((book) => {
        const display = document.createElement('li');
        display.textContent = book.getInfo();
        list.appendChild(display); 
    });
}

const list = document.querySelector('.list');
const titleInput = document.querySelector('input[name="title"]');
const authorInput = document.querySelector('input[name="author"]');
const pagesInput = document.querySelector('input[name="pages"]');
const readCheckbox = document.querySelector('input[name="read"]');
const addButton = document.querySelector('.addButton');

addButton.addEventListener('click', (event) => {
    console.log('tikladin')
    event.preventDefault();

    if (!titleInput.value.trim() || !authorInput.value.trim() || !pagesInput.value.trim()) {
        alert('Please fill out all fields.');
        return;
    }

    if (readCheckbox.checked) {
        addBookToLibrary(titleInput.value.trim(), authorInput.value.trim(), parseInt(pagesInput.value.trim()), true);
    } else {
        addBookToLibrary(titleInput.value.trim(), authorInput.value.trim(), parseInt(pagesInput.value.trim()), false);
    }

    display();
});

display();
