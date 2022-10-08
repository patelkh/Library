window.onload = () => {
    
    myLibrary = []

    function Book(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status; 
    }

    function load() {
        const records = document.querySelector('.records');
        myLibrary.forEach(book => {
            const row = document.createElement('tr');
            const title = row.appendChild(document.createElement('td'));
            const author = row.appendChild(document.createElement('td'));
            const pages = row.appendChild(document.createElement('td'));
            const status = row.appendChild(document.createElement('td'));
            title.textContent = book.title
            author.textContent = book.author
            pages.textContent = book.pages
            status.textContent = book.status
            records.appendChild(row);
        })
    }

    function insert() {
        const records = document.querySelector('.records');
        const row = document.createElement('tr');
        const title = row.appendChild(document.createElement('td'));
        const author = row.appendChild(document.createElement('td'));
        const pages = row.appendChild(document.createElement('td'));
        const status = row.appendChild(document.createElement('td'));
        let book = myLibrary[myLibrary.length-1]
        title.textContent = book.title
        author.textContent = book.author
        pages.textContent = book.pages
        status.textContent = book.status
        records.appendChild(row);
    }

    function add(event) {
        let book = event.target
        newBook = new Book(book.title.value, book.author.value, book.pages.value, book.status.value);
        myLibrary.push(newBook)
        insert()
        const form = document.querySelector('form');
        form.reset()
    }

    book1 = new Book('War and Peace', 'Leo Tolstoy', 300, 'Completed')
    book2 = new Book('The Odyssey', 'Homer', 500, 'In Progress')
    book3 = new Book('The Hobbit', 'J.R.R Tolkien', 250, 'Completed')
    myLibrary.push(book1)
    myLibrary.push(book2)
    myLibrary.push(book3)
    load();
    const form = document.querySelector('form');
    form.addEventListener('submit', add);


}
