const { authJwt } = require("../middleware");
const controller = require("../controllers/book.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.get("/api/book/get_all_book",
    [authJwt.verifyToken],
    controller.get_all_book
  );
  
  app.post("/api/book/get_book_detail",
    [authJwt.verifyToken],
    controller.get_book_detail
  );
};
