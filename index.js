window.onload = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', add, false);
    
    myLibrary = [
        new Book('War and Peace', 'Leo Tolstoy', 300, 'Completed'),
        new Book('The Odyssey', 'Homer', 500, 'In Progress'),
        new Book('The Hobbit', 'J.R.R Tolkien', 250, 'Completed')
    ]

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

    function add(event) {
        let book = event.target
        const records = document.querySelector('.records');
        const row = document.createElement('tr');
        const title = row.appendChild(document.createElement('td'));
        const author = row.appendChild(document.createElement('td'));
        const pages = row.appendChild(document.createElement('td'));
        const status = row.appendChild(document.createElement('td'));
        title.textContent = book.title.value;
        author.textContent = book.author.value;
        pages.textContent = book.pages.value;
        status.textContent = book.status.value;
        form.reset();
        event.preventDefault();
        records.appendChild(row);        
    }

    load()
}
