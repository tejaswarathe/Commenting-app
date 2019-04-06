module.exports = app => {
  let comments = require("../controllers/controller.js");

  app.post("/comments", comments.create);

  app.get("/comments", comments.findAll);

  app.put("/comments/:commentId", comments.update);

  app.delete("/comments/:commentId", comments.delete);
};
