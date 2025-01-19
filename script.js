class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    
    getInfo() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "already read." : "not read yet."}`;
    };

    static addBookToLibrary(title, author, pages, read) {
        const newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        return newBook;
    }
}

function display() {
    list.replaceChildren();
    myLibrary.forEach((book, index) => {
        const display = document.createElement('li');
        const update = document.createElement('button');
        const remove = document.createElement('button');

        display.textContent = book.getInfo();
        update.textContent = 'Read';
        remove.textContent = 'Remove';

        remove.setAttribute('index-number', index);
        update.setAttribute('index-number', index);
        display.appendChild(update);
        display.appendChild(remove);
        list.appendChild(display);
    });
}

function toggleRead(index) {
    Book.prototype.toggleRead = function() {
        this.read = !this.read;
    };

    myLibrary[index].toggleRead();
}

const myLibrary = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true),
    new Book("Brave New World", "Aldous Huxley", 268, false),
    new Book("Pride and Prejudice", "Jane Austen", 279, true),
];

const list = document.querySelector('.list');
const titleInput = document.querySelector('input[name="title"]');
const authorInput = document.querySelector('input[name="author"]');
const pagesInput = document.querySelector('input[name="pages"]');
const readCheckbox = document.querySelector('input[name="read"]');
const addButton = document.querySelector('.addButton');

addButton.addEventListener('click', (event) => {
    event.preventDefault(); // prevents refreshes when clicked
    
    if (!titleInput.value.trim() || !authorInput.value.trim() || !pagesInput.value.trim()) {
        alert('Please fill out all fields.');
        return;
    }
    
    if (readCheckbox.checked) {
        Book.addBookToLibrary(titleInput.value.trim(), authorInput.value.trim(), parseInt(pagesInput.value.trim()), true);
    } else {
        Book.addBookToLibrary(titleInput.value.trim(), authorInput.value.trim(), parseInt(pagesInput.value.trim()), false);
    }
    
    display();
});

list.addEventListener('click', (event) => {
    const clickedElement = event.target;
    const index = clickedElement.getAttribute('index-number');

    if (clickedElement.textContent == 'Remove') {
        myLibrary.splice(index, 1);
    }

    if (clickedElement.textContent == 'Read') {
        toggleRead(index);
    }
    
    display();
});

display(); // first load
