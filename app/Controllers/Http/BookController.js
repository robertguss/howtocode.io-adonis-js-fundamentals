"use strict";

class BookController {
  async index({ view }) {
    const books = [
      { title: "Book 1", author: "John Doe" },
      { title: "Book 2", author: "Jane Doe" },
      { title: "Book 3", author: "Adam Smith" },
    ];

    return view.render("book.index", {
      books,
    });
  }
}

module.exports = BookController;
