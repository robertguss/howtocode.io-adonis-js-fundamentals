"use strict";

/*
|--------------------------------------------------------------------------
| BookSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class BookSeeder {
  async run() {
    const booksArray = await Factory.model("App/Models/Book").createMany(7);
  }
}

module.exports = BookSeeder;
