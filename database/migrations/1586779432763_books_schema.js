"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BooksSchema extends Schema {
  up() {
    this.create("books", (table) => {
      table.increments();
      table.string("title");
      table.string("author");
      table.string("cover_image");
      table.string("isbn");
      table.timestamps();
    });
  }

  down() {
    this.drop("books");
  }
}

module.exports = BooksSchema;
