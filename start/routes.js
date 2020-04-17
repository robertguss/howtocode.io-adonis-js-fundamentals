"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

// Must be logged in
Route.group(() => {
  // Session
  Route.get("logout", "SessionController.delete");

  // Register Users
  Route.get("register", "UserController.create");
  Route.post("register", "UserController.store");

  // Books
  Route.get("books/create", "BookController.create");
  Route.post("books", "BookController.store");
  Route.get("/books/:id/edit", "BookController.edit");
  Route.put("/books/:id", "BookController.update");
  Route.delete("/books/:id", "BookController.destroy");
}).middleware(["auth"]);

// Books
Route.get("/", "BookController.index");
Route.get("books/:id", "BookController.show");

// Session
Route.get("login", "SessionController.create");
Route.post("login", "SessionController.store");
