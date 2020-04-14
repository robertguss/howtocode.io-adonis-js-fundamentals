"use strict";

const Book = use("App/Models/Book");
const { validate } = use("Validator");

class BookController {
  async index({ view }) {
    const books = await Book.all();

    return view.render("book.index", {
      books: books.toJSON(),
    });
  }

  async create({ view }) {
    return view.render("book.create");
  }

  async store({ request, response, session }) {
    const validation = await validate(request.all(), {
      title: "required",
      author: "required",
      cover_image: "required",
      isbn: "required|min:10|max:10",
    });

    if (validation.fails()) {
      session.withErrors(validation.messages()).flashAll();
      return response.redirect("back");
    }

    const book = new Book();

    book.title = request.input("title");
    book.author = request.input("author");
    book.cover_image = request.input("cover_image");
    book.isbn = request.input("isbn");

    await book.save();

    session.flash({ notification: "Book Created" });
    return response.redirect("/");
  }
}

module.exports = BookController;
