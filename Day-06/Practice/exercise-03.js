const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    yearPublished: 1925
};

book.isAvailable = true
delete book.yearPublished

console.log(book)