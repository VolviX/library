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
}

const main = document.querySelector('.main');

myLibrary.forEach((book) => {
    const display = document.createElement('li');
    display.textContent = book.getInfo();
    main.appendChild(display); 
});
