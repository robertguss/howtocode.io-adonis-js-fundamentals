"use strict";

class SessionController {
  create({ view }) {
    return view.render("session.create");
  }

  async store({ auth, request, response, session }) {
    const { email, password } = request.all();

    try {
      await auth.attempt(email, password);
    } catch (e) {
      session.flashExcept(["password"]);

      session.flash({
        error: "We cannot find any account with these credentials.",
      });

      return response.redirect("login");
    }

    session.flash({ notification: "Logged in successfully" });
    return response.redirect("/");
  }

  async delete({ auth, response, session }) {
    await auth.logout();
    session.flash({ notification: "Logged out successfully" });

    return response.redirect("/");
  }
}

module.exports = SessionController;
