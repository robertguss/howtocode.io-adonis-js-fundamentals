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

// Route.on("/").render("welcome");
Route.get("/", "BookController.index");
Route.get("books/create", "BookController.create");
Route.post("books", "BookController.store");
Route.get("books/:id", "BookController.show");
Route.get("/books/:id/edit", "BookController.edit");
Route.put("/books/:id", "BookController.update");
Route.delete("/books/:id", "BookController.destroy");
